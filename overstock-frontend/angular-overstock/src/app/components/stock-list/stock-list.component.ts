import { Component, OnInit } from '@angular/core';
import {Stock} from "../../common/stock";
import {StockService} from "../../services/stock.service";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocks: Stock[];

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.listStocks();
  }

  listStocks() {
    this.stockService.getStockList().subscribe(
      data => {
        this.stocks = data;
      }
    )
  }

}
