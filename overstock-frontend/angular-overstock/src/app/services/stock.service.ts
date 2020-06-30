import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Stock} from "../common/stock";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private  baseUrl = 'http://localhost:8081/api/stocks';

  constructor(private httpClient: HttpClient) { }

  getStockList(): Observable<Stock[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.stocks)
    );
  }
}

interface GetResponse {
  _embedded: {
    stocks: Stock[];
  }
}
