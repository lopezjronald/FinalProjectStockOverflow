import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommentRating} from "../common/comment-rating";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommentRatingService {

  private baseUrl = 'http://localhost:8081/api/comment-ratings'

  constructor(private httpClient: HttpClient) { }

  getCommentRatingList(): Observable<CommentRating[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.commentRatings)
    );
  }
}

interface GetResponse {
  _embedded: {
    commentRatings: CommentRating[];
  }
}










