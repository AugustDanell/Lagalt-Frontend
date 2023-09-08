import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/models/project';
import { Routes, RouterModule, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ProjectService } from 'src/app/services/project-service.service';
import { UserService } from 'src/app/services/user-service.service';
import { Collaborator } from 'src/app/models/collaborator';
import { CollaboratorService } from 'src/app/services/collaborator-service.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit{

  constructor(private router: Router, private projectService:ProjectService, private userService: UserService, private collaboratorService:CollaboratorService) { 
}
  projectModels:Project[] = []
  collaboratorModels:Collaborator[] = []

  user:User|any = null;

  /**
   * ngOnInit()
   * On init we do a GET request using the apiHandler to set our project models with data from the Backend:
   * We also initialize a user from the localStorage. 
   */

  ngOnChange(){

  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    
    this.userService.getUserObservable().subscribe((user) => {
      //this.user = user;
      //console.log("user from profile PAGE " + JSON.stringify(user));
    });

    console.log("TEST" + this.user.id)

    this.projectService.getProjects().subscribe(
      (projects: Project[]) => { this.projectModels = projects.filter((element) => element.userId === this.user.id) }
    )

    this.collaboratorService.getCollaborators().subscribe(
      (collaborators:Collaborator[]) => { this.collaboratorModels = collaborators }
    )
  }

  /** 
   * onClickAddProject()
   * A method that maps the event of clicking a button to a navigation to the add project page. 
   */

  onClickAddProject() {
    this.router.navigate(['/add']);
  }

}
