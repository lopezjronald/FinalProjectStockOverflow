import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.listComments();
  }

  listComments() {
    this.commentService.getCommentList().subscribe(
      data => {
        this.comments = data;
      }
    )
  }
}
