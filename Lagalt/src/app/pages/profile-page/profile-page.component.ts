import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectItemComponent } from 'src/app/components/project-item/project-item.component';
import { Project } from 'src/app/models/project';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {}

  //TODO: Replace this dummy data with data that we read in from an API or something later on:
  dummyName:String = "Mr Brass-Bilalsson (Billys)"
  dummyDescription:String = "I work in retail, I am 45 years old but my humor is that of a 15 year old. My motto: Laugh hard. Die Hard. Bruce Willys stars in Die Hard. I pretend am him. In life i am shining star... but on a bright day (sun in my eye). In gaming I play single player games cause they remind me that in real life I am single player. As project I look for frend i can play with. I dont have skills (sadge). Also I dislike spider because have claustrofobia. thx."
  projectModels:Project[] = [{id:1, name: "Project 1", owner:true}, {id: 2, name: "Project 2", owner: false}, {id: 3, name: "Project 3", owner: false}]
  
  /**
   * TODO: Local removal works, we need to update via an API request.
   * 
   * onRemoveEvent()
   * An event is passed up from a project item component and in the emitting of that event the corresponding project is passed.
   * Here we 1. Locally remove the project from our list of models and 2. We pass the changes via an API request. 
   */
  onRemoveEvent(project:Project){
    let index = this.projectModels.indexOf(project)
    this.projectModels.splice(index, 1)
    alert("Remove event triggered in profile page component yo!")
  }

  removeOwner(){

  }

  /** 
   * TODO: Currently this function only registers a button press. It should perhaps navigate the user to the add project component?
   * 
   * onClickAddProject()
   * A button that should map the user the the form for creating a new project.
   */

  onClickAddProject() {
    alert("profile-page.onClick() was called");
  }

  /**
   * TODO: Currently this function is mapped to a dummy variable but the text can (and should) refer to the logged in user later on.
   * 
   * onSubmit()
   * When a user enters in the description the form is passed to this function, and here we can extract the text that was written in the textfield.
   * @param form, a NgForm that is passed in with data from the user.
   */

  public onSubmit(form: NgForm): void {
    this.dummyDescription = form.value.desc
  }
}
