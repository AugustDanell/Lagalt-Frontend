import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ApiHandlerService } from 'src/app/services/api-handler.service';

@Component({
  selector: 'app-add-project-page',
  templateUrl: './add-project-page.component.html',
  styleUrls: ['./add-project-page.component.scss']
})
export class AddProjectPageComponent implements OnInit {

  projectModels:Project[] = []
  constructor(private router:Router, private apiHandler:ApiHandlerService){}

  /** 
  * ngOnInit()
  * Reads in the projects from the API to be stored locally.   
  */
  ngOnInit(): void {
    this.apiHandler.getProjects().subscribe(
      (projects: Project[]) => {
        this.projectModels = projects
      }

    )
  }

  /**
   * addProject()
   * A function that is triggered by listening to an event, takes in a project and adds it to the users' projects.
   * 
   * @param project 
   */

  addProject(project:Project){
    let insertProject:Project = {id:this.projectModels.length+1, title: project.title, descriptions:project.descriptions, gitlink:"Yo link", category: "GAME", status:0, collaboratorIds:[], commentIds:[]}
    this.apiHandler.postProject(insertProject)
    this.projectModels.push(insertProject)
    alert("A new project was added!")
  }
  
}