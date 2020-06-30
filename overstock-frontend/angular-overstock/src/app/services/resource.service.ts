import { Injectable } from '@angular/core';
import {Resource} from "../common/resource";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private baseUrl = 'http://localhost:8081/api/resources';

  constructor(private httpClient: HttpClient) { }

  getResourceList(): Observable<Resource[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.resources)
    );
  }
}



interface GetResponse {
  _embedded: {
    resources: Resource[];
  }

}
