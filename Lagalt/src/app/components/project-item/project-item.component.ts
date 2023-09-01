import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import {User} from 'src/app/models/user'

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit{
  constructor(private router: Router) { }

  // Input, project model: When the component is created a project model is passed from its parent (which can be Landing Page, Profile Page, etc):
  @Input() projectModel: Project | any;
  
  collaborator:boolean|any = null
  owner:boolean|any = null

  /**
   * ngOnInit()
   * On init this project-item component will attempt to get the user and establish relations regarding ownership of the project encapsulated in project model:
   */
  ngOnInit(){
    if(localStorage.getItem('user') != null){
      let user:User = JSON.parse(localStorage.getItem('user')!) as User
      for(let collabID of this.projectModel.collaboratorIds){
        if(collabID == user.id){
          this.collaborator = true
          break
        }

        // TODO: OwnerID of project, when we have that in the Backend / data seeding.
      }
    }
  }

  /**
   * onGotoClick()
   * This function is called on click and it too emits a signal with the project to the parent (profile page), but for navigational purposes.
   */
  onGotoClick(id:number){
    this.router.navigate(['/project']);
  }
}
