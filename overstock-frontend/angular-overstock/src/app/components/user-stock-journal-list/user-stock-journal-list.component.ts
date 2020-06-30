import { Component, OnInit } from '@angular/core';
import {UserStockJournal} from "../../common/user-stock-journal";
import {UserStockJournalService} from "../../services/user-stock-journal.service";

@Component({
  selector: 'app-user-stock-journal-list',
  templateUrl: './user-stock-journal-list.component.html',
  styleUrls: ['./user-stock-journal-list.component.css']
})
export class UserStockJournalListComponent implements OnInit {

  userStockJournals: UserStockJournal[];

  constructor(private userStockJournalService: UserStockJournalService) { }

  ngOnInit() {
    this.listUserStockJournals();
  }

  listUserStockJournals() {
    this.userStockJournalService.getUserStockJournalList().subscribe(
      data => {
        this.userStockJournals = data;
      }
    )
  }

}
