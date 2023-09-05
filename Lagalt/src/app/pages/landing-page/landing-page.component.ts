import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { User } from 'src/app/models/user';
import { ProjectService } from 'src/app/services/project-service.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  projectModels:Project[] = [];
  userModels: User[] = [];
  allProjects: Project[] = [];


  selectedCategory: String = "none";
  searchBtnClicked: boolean = false;
  searchTerm: string = "";

  
  filterUser: boolean = false;
  filterProject: boolean = false;
  usersFound: boolean = false;
  projectsFound: boolean = false;
  
  constructor(private userService: UserService, private projectService:ProjectService) {}

  ngOnInit(): void {

    this.projectService.getProjects().subscribe(
      (projects: Project[]) => {
          this.projectModels = projects;
          this.allProjects = projects
      }
    )
  }

  isLoggedIn(){
    return this.userService.isAuthenticated()
  }

  // * Receiving the search input from the child (search-form component)
  handleSearch(searchTerm: string) {
    this.searchBtnClicked = true;
    this.searchTerm = searchTerm;

    this.userService.getUserBySearch(this.searchTerm).subscribe(
      (users: User[]) => {
        this.userModels = users;
        if(this.userModels.length > 0){
          this.usersFound = true;
          this.filterUser = true;
        }else{
          this.usersFound = false;
        }
      }
    )

    this.projectService.getProjectsBySearch(this.searchTerm).subscribe(
      (projects: Project[]) => {
        this.projectModels = projects;
        if(this.projectModels.length > 0){
          this.projectsFound = true;
        }else{
          this.projectsFound = false;
        }
      }
    )

  }

  onCategoryClicked(category: string){
    this.selectedCategory = category;
    this.projectModels = this.allProjects.filter(project => project.category === category);

  }

  filterUserClick(){
    this.filterUser = true;
    this.filterProject = false;
  }

  filterProjectClick(){
    this.filterProject = true;
    this.filterUser = false;

  }

}
