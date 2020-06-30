import { Component, OnInit } from '@angular/core';
import {Webinar} from "../../common/webinar";
import {WebinarService} from "../../services/webinar.service";

@Component({
  selector: 'app-webinar-list',
  templateUrl: './webinar-list.component.html',
  styleUrls: ['./webinar-list.component.css']
})
export class WebinarListComponent implements OnInit {

  webinars: Webinar[];

  constructor(private webinarService: WebinarService) { }

  ngOnInit() {
    this.listWebinars();
  }

  listWebinars() {
    this.webinarService.getWebinarList().subscribe(
      data => {
        this.webinars = data;
      }
    )
  }

}
