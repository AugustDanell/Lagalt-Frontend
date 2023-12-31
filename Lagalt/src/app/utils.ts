// Change the port to be anything you like:
const PORT = "8080"

// URLs leading to the generic controller endpoint for different models (Projects, Users, Comments, etc):

// Path to local (Set path to whatever you want to run):
const localHost = "http://localhost:" + PORT
const azureDeployment = "https://lagalt-backend-app.azurewebsites.net"
const path = azureDeployment

export const PROJECT_PRIVATE_API_URL:string = path + "/api/projects"
export const PROJECT_PUBLIC_API_URL:string = PROJECT_PRIVATE_API_URL + "/public"

export const COMMENT_PRIVATE_API_URL:string = path + "/api/comments"
export const COMMENT_PUBLIC_API_URL:string = COMMENT_PRIVATE_API_URL + "/public" 

export const USER_PRIVATE_API_URL:string = path + "/api/users"
export const USER_PUBLIC_API_URL:string = USER_PRIVATE_API_URL + "/public"

export const COLL_PRIVATE_API_URL:string = path + "/api/collaborators"
export const COLL_PUBLIC_API_URL:string = COLL_PRIVATE_API_URL + "/public"

export const MESSAGE_PRIVATE_API_URL:string = path + "/api/messages"