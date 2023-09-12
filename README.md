# Lagalt (Frontend)
## Description
Lagalt is a project management tool. A user can register themselves / log in to the service (Via keycloak). Thereafter the user can edit their profile, create projects, find other people's profiles and projects (filter and search) and request to join said projects. Every user is the owner of their own projects and it is up to them to accept or deny any incoming collaboration requests sent by other users (similar in function to GitHub). Moreover, any user can also comment on any project that they so chose. Basically, Lagalt is as a project management tool similar to GitHub but with no possibility to run GitBash commands (obviously). This right here is the Frontend side of the project, to see the backend side of the same project, see the subsection below:

### Link To Backend
[Backend Link](https://github.com/98emre/Lagalt-Backend)

## Installation Guide
To run the project, follow these steps down below:
1. Install NPM and Git Bash if you haven't already.
2. Install Angular globally: ```npm install -g @angular/cli```
3. Install Angular Material Dependency:```ng add @angular/material```
4. Install Angular Keycloak Dependency:```npm install keycloak-js```
5. Clone down this folder: ```git clone <ssh link>```
6. Navigate to the Lagalt Folder (cd) and run: ```ng serve```  to start a development server 
7. If no error occurs, go to localhost:4200 as displayed in the terminal. 

## Example Run (Commented Screenshots) 
### 1. Landing Page
When the user goes to localhost:4200, they are directed to the landing page. Here the user can search for projects, go to the projects (by clicking them), filter based on category. Moreover the user can also log in as seen in the commented screenshot below.

<img width="844" alt="1" src="https://github.com/AugustDanell/Lagalt-Frontend/assets/70810124/3cd623e4-e775-404b-b8b9-26c723ccf3fe">

### 2. Login Page (Keycloak)
If the user presses on the login button they are navigated to the key cloak login page that authenticates a user. However, before logging in the user can as a guest search for projects/users, filter them etc, as seen in the first image. Logging in opens up new ways of interacting with the pages (leave comments, request to join projects etc), as well as open up the profile page where a user can change their own user settings.

<img width="844" alt="2" src="https://github.com/AugustDanell/Lagalt-Frontend/assets/70810124/4053aaa0-bc95-4b03-a360-502ff89d9438">

### 3. Profile Page
When logged in and authenticated, a user can always go to the project page from the Navbar. A user can edit their user settings for other users to see. Moreover, an authenticated user can also create projects of their own as well as accept / decline any incoming requests from other user's to join their projects (though in this example screenshot we have enabled joining our own projects for demonstration purposes). 

<img width="844" alt="3" src="https://github.com/AugustDanell/Lagalt-Frontend/assets/70810124/cc26096c-1223-45df-9199-226e9fb10aa8">

## Component Tree
![frontend drawio](https://github.com/AugustDanell/Lagalt-Frontend/assets/70810124/4386af79-56a7-4d0e-b9bd-b32ee1cdc3f8)

## Authors
Emre Demirel ([emre98](https://github.com/98emre))

Vendela Österman ([Vosterman](https://github.com/Vendelaosterman))

August Danell Håkansson ([AugustDanell](https://github.com/AugustDanell))
