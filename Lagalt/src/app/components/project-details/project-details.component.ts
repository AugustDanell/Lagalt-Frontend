import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Collaborator } from 'src/app/models/collaborator';
import { Project } from 'src/app/models/project';
import { User } from 'src/app/models/user';
import { CollaboratorService } from 'src/app/services/collaborator-service.service';
import { ProjectService } from 'src/app/services/project-service.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {

  @Input() projectDetails: Project | any;
  @Input() projectOwner: User | any;
  @Input() collaboratorModels: Collaborator[] = [];
  @Input() collaboratorLength:number|any;

  user:User|any = null
  isCollaborator: boolean = false;
  isPending: boolean = false;
  motivation: string = "";

  collabClicked: boolean = false;
  editBtnClicked: boolean = false;
  description: string = "";
  link: string = "";
  selectedStatus: string = "";

  newDescription: string = "";
  newStatus: string = ""; 
  newLink: string = "";

  constructor(private collaboratorService: CollaboratorService, 
    private userService: UserService, 
    private projectService: ProjectService, 
    private router: Router){}

 

  /**
   * ngDoCheck()
   * To handle input, the ngDoCheck() method is called for when the colaboratorModels are read in.
   * When this happens, collaborators are filtered on those who are APPROVED and those who are PENDING.
   * The ngDoCheck life cycle hook will make sure to read in the user related data when that is taken care of
   * (Local Storage, API requests etc).
   */

  ngDoCheck(){

    if(this.projectDetails != null && localStorage.getItem('user') != null && this.collaboratorModels != null){
      this.user = JSON.parse(localStorage.getItem('user')!) 
    // checks if this project id and logged in user id is in the list:
    const filterCollab = this.collaboratorModels.filter((collaborator) => collaborator.userId === this.user.id && collaborator.projectId === this.projectDetails.id && collaborator.status === "APPROVED")
    const filterPending = this.collaboratorModels.filter((collaborator) => collaborator.userId === this.user.id && collaborator.projectId === this.projectDetails.id && collaborator.status === "PENDING")

    if(filterCollab.length > 0){
      this.isCollaborator = true;
    }

    if(filterPending.length > 0){
      this.isPending = true;
    }

    // Set the default value of the edit form to the description of the project
    this.description = this.projectDetails.descriptions;
    this.link = this.projectDetails.gitlink;
    this.selectedStatus = this.projectDetails.status;
    }
  }

  /**
   * onCollabSubmit()
   * onCollabSubmit() is a method that is invoked once the logged in user presses to join a project.
   * A new collaborator object is then created and subsequently passed to collaboratorService to be
   * posted to the API.
   */
  onCollabSubmit(form: NgForm){
    this.isPending = true;
    this.collabClicked = false;
    
    let newCollaborator:Collaborator = 
    {
      id: 1,
      userId: this.user.id,
      status: "PENDING", 
      requestDate: new Date(),
      approvalDate: null,
      projectId: this.projectDetails.id,
      motivation: form.value.motivation
    }

    this.collaboratorService.postCollaborator(newCollaborator)
    this.userService.tokenRefresh()
  }

  /**
   * convertProgress()
   * convertProgress() is a method that converts the status value from database to a suitable string
   * The method is called in the html template of the component 
   */
  convertProgress(progress: string) {
    var convertedString = "";
    switch (progress) {
      case "NOT_STARTED":
        convertedString = "Founding";
        break;
      case "IN_PROGRESS":
        convertedString = "In progress"
        break;
      case "COMPLETED":
        convertedString = "Completed"
        break;
    }
    return convertedString;
  }

  /**
   * ShowEditElem()
   * showEditElem() is a method that handles the toggle between visible and invisible for the edit div
   */
  showEditElem(){
    if(this.editBtnClicked){
      this.editBtnClicked = false;
    }else if(!this.editBtnClicked){
      this.editBtnClicked = true;
    }
    this.userService.tokenRefresh()
  }

  navigateToUser(){
    this.router.navigate(['/user', this.projectOwner.id]);
  }

    /**
   * onSubmit()
   * onSubmit() is a method that handles the changes of the project details
   * The method received the changes from the form and update the project by calling customUpdateProject() in projectService
   * 
   * @param form, a NgForm where the changes is received onto this function.
   */
  public onSubmit(form: NgForm): void {
    this.editBtnClicked = false;
    this.newDescription = form.value.desc;
    this.newLink = form.value.link;
    this.newStatus = form.value.status;

    // Checks if values has not been edited, in that case the old values will be inserted. 
    if(form.value.desc == ""){
      this.newDescription = this.projectDetails.description;
    }
    if(form.value.link == ""){
      this.newLink = this.projectDetails.description;
    }
    if(form.value.status == ""){
      this.newStatus = this.projectDetails.status
    }

    const updatedProject: Partial<Project> = {
      descriptions: this.newDescription,
      gitlink: this.newLink,
      status: this.newStatus
    }

    this.projectDetails.description = this.newDescription;
    this.projectDetails.gitlink = this.newLink;
    this.projectDetails.status = this.newStatus;


    this.projectService.customUpdateProject(this.projectDetails.id, updatedProject).subscribe({
      next: (response) => {
        this.projectService.getProjectById(this.projectDetails.id).subscribe({
          next: (updatedApiProject) => {
            this.projectDetails.descriptions = updatedApiProject.descriptions
            this.projectDetails.gitlink = updatedApiProject.gitlink
            this.projectDetails.status = updatedApiProject.status
          }
        })
      }
    })

    this.userService.tokenRefresh()
  }

}
