import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Webinar} from "../common/webinar";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WebinarService {

  private baseUrl = 'http://localhost:8081/api/webinars'

  constructor(private httpClient: HttpClient) { }

  getWebinarList(): Observable<Webinar[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.webinars)
    );
  }
}

  interface GetResponse {
    _embedded: {
      webinars: Webinar[];
    }
}
