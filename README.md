# Lagalt (Frontend)
## Description
Lagalt is a project collaboration tool. A user can register themselves / log in to the service (Via keycloak). Thereafter the user can edit their profile, create projects, find other people's profiles and projects (filter and search) and request to join said projects. Every user is the owner of their own projects and it is up to them to accept or deny any incoming collaboration requests sent by other users (similar in function to GitHub). Moreover, any user can also comment on any project that they so chose. Basically, Lagalt is as a project management tool similar to GitHub but with no possibility to run GitBash commands (obviously). This right here is the Frontend side of the project, to see the backend side of the same project, go here: [Backend Link](https://github.com/98emre/Lagalt-Backend) 

### Video Guide Divided up Into Chapters (User Manual)
**Link:** https://youtu.be/_CpSawlJU_w?si=M8xv66CoDlDNYa45

### Deployment To Vercel (To Test The Application Yourself)
Here is a link to the deployment in Vercel, feel free to log in as any of the users above to explore every functionality: [Vercel Deployment](https://lagat-frontend.vercel.app/)

**NOTE:** Cookies can interrupt the Vercel run, if you have a white screen in running the link above, right click it and run in private / incognito mode. 

## Installation Guide
If you want to run the project locally, follow these steps down below:
1. Install NPM and Git Bash if you haven't already.
2. Install Angular globally: ```npm install -g @angular/cli```
3. Install Angular Material Dependency:```ng add @angular/material```
4. Install Angular Keycloak Dependency:```npm install keycloak-js```
5. Clone down this folder: ```git clone <ssh link>```
6. Navigate to the Lagalt Folder (cd) and run: ```ng serve```  to start a development server 
7. If no error occurs, go to localhost:4200 as displayed in the terminal. 

## Component Tree
![compTree drawio (2)](https://github.com/AugustDanell/Lagalt-Frontend/assets/70810124/93ae1339-89f0-457f-97ca-7a8011777453)



## Authors
Emre Demirel ([emre98](https://github.com/98emre))

Vendela Österman ([Vosterman](https://github.com/Vendelaosterman))

August Danell Håkansson ([AugustDanell](https://github.com/AugustDanell))
