export class Comment {

   private id: string;
   private postId: string;
   private name: string;
   private email: string;
   private body: string;

   // please write setters and getters for the above properties
   // below here.

   getName(): string {
       return this.name;
   }
   getEmail(): string {
       return this.email;
   }
   getBody(): string {
       return this.body;
   }
   
   public static fromObject(obj): Comment {

       let commentRef: Comment = new Comment();
        Object.assign(commentRef, obj);
       return commentRef;

   }
   
}