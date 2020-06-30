import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserStockJournal} from "../common/user-stock-journal";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserStockJournalService {

  private baseUrl = 'http://localhost:8081/api/stock-journals';

  constructor(private httpClient: HttpClient) { }

  getUserStockJournalList(): Observable<UserStockJournal[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.userStockJournals)
    );
  }

}

interface GetResponse {
  _embedded: {
    userStockJournals: UserStockJournal[];
  }
}
