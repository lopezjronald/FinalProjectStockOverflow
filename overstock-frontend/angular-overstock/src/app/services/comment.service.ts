import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = 'http://localhost:8081/api/comments';

  constructor(private httpClient: HttpClient) {
  }

  getCommentList(): Observable<Comment[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.comments)
    );
  }
}

  interface GetResponse {
    _embedded: {
      comments: Comment[];
    }



}
