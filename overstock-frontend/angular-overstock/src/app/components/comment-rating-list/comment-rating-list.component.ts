import { Component, OnInit } from '@angular/core';
import {CommentRating} from "../../common/comment-rating";
import {CommentRatingService} from "../../services/comment-rating.service";

@Component({
  selector: 'app-comment-rating-list',
  templateUrl: './comment-rating-list.component.html',
  styleUrls: ['./comment-rating-list.component.css']
})
export class CommentRatingListComponent implements OnInit {

  commentRatings: CommentRating[];

  constructor(private commentRatingService: CommentRatingService) { }

  ngOnInit() {
    this.listCommentRatings();
  }

  listCommentRatings() {
    this.commentRatingService.getCommentRatingList().subscribe(
      data => {
        this.commentRatings = data;
      }
    )
  }

}
