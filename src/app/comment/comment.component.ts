import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { Comment } from './comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  providers: [CommentService]
})

export class CommentComponent implements OnInit {

  public comments: Comment[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit() {

    this.commentService.getComments().subscribe((comments: Comment[]) => {

      // Assign comments to the comments properties
      this.comments = comments;
      console.log("Results : ", this.comments);

    }, error => {

      console.log(error);

    });

  }


}
