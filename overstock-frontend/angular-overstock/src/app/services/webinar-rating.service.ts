import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WebinarRating} from "../common/webinar-rating";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WebinarRatingService {

  private baseUrl = 'http://localhost:8081/api/webinar-ratings'

  constructor(private httpClient: HttpClient) { }

  getWebinarRatingList(): Observable<WebinarRating[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.webinarRatings)
    );
  }

}

interface GetResponse {
  _embedded: {
    webinarRatings: WebinarRating[];
  }
}
