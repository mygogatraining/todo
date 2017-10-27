import { Injectable } from '@angular/core';
import { Http, Response, RequestMethod, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';;
import 'rxjs/add/operator/map';
import { Comment } from './comment';

@Injectable()
export class CommentService {

    private API_END_POINT: string = 'https://jsonplaceholder.typicode.com/posts/1/comments';

    constructor(private http: Http) {}

    public getComments(): Observable<Comment[]> {
    
        // retun list of Observable comments from the above api
       return this.http.get(this.API_END_POINT).map((response: Response) => {

            let comments: Comment[] = [];
             response.json().forEach(comment => {
                comments.push(Comment.fromObject(comment));

            });

            return comments;
            
        })

    }

 }