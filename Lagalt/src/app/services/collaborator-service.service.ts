import { Injectable } from '@angular/core';
import { COLL_PRIVATE_API_URL, COLL_PUBLIC_API_URL } from '../utils';
import { Observable } from 'rxjs';
import { Collaborator } from '../models/collaborator';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import keycloak from 'src/keycloak';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService{

  constructor(private http:HttpClient) {
   }

  /**
   * getCollaborators()
   * getCollaborators() is a method that makes an API request and as such provides for subscription services for whatever
   * component might want to call this method.
   * @returns An API request, that is observable so that one can do subscription to it.
   */ 
  getCollaborators(): Observable<Collaborator[]>{
    return this.http.get<Collaborator[]>(COLL_PUBLIC_API_URL)
  }

  /**
   * postCollaborator()
   * postCollaborator() is a method that makes a POST request. 
   * The method POSTS a collaborator object to the backend.
   * @param collaborator, the collaborator object to be posted.
   */
  postCollaborator(collaborator:Collaborator){
    
    const postCollaborator:Partial<Collaborator> = {
      status: collaborator.status,
      requestDate: collaborator.requestDate,
      approvalDate: collaborator.approvalDate,
      userId: collaborator.userId,
      projectId: collaborator.projectId,
      motivation: collaborator.motivation
    }
  
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${keycloak.token}` 
      }),
    };
    this.http
    .post<Collaborator>(COLL_PRIVATE_API_URL + "/"+ collaborator.projectId + "/add-collaborator", postCollaborator, httpOptions)
    .subscribe({
      error: (error) => {console.log(error)}
    });
  }

  /**
   * deleteCollaborator()
   * A method that deletes a collaborator in the backend.
   * This method is called when a user wants to decline a collaboration request.
   * @param collaborator, The item to be deleted. 
   */
  deleteCollaborator(collaborator:Collaborator){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${keycloak.token}` 
      }),
    };
    this.http
    .delete<Collaborator>(COLL_PRIVATE_API_URL + "/" + collaborator.id, httpOptions).subscribe({
      error:(error) => console.log(error)
    })
  }

  /**
   * customDeleteCollaboratorOnId()
   * A method that deletes a collaborator in the backend.
   * The custom prefix here means that we simply return an observable
   * and then functionality outside of this class can do anything they
   * want after the HTTP request is successfully completed.
   * @param id, the id of the collaborator to be removed.
   * @returns An observable, pertaining to the DELETE of the collaborator
   * on the ID passed in.
   */
  customDeleteCollaboratorOnId(id:number){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${keycloak.token}` 
      }),
    };
    return this.http.delete<Collaborator>(COLL_PRIVATE_API_URL + "/" + id, httpOptions)
  }

  /**
   * patchCollaborator()
   * A method that updates a collaborator.
   * This method is invoked when a user wants to grant a collaboration request (accept it).
   * @param collaborator, The collaborator item to be updated. 
   */
  patchCollaborator(collaborator:Collaborator){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${keycloak.token}` 
      }),
    };
    this.http
    .patch<Collaborator>(COLL_PRIVATE_API_URL + "/" + collaborator.id + "/update", collaborator, httpOptions).subscribe({
      error:(error) => console.log(error)
    })
  }

}
