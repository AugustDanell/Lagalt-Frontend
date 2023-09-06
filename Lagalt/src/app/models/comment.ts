
// NOTE: Comment is some kind of interface so just calling this class "Comment" causes a name conflict:
export type ProjectComment = {
    id:number,
    author: string,
    text: string,
    date: string,
    projectId: number

}