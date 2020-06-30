import {Component, OnInit} from '@angular/core';
import {WebinarRating} from "../../common/webinar-rating";
import {WebinarRatingService} from "../../services/webinar-rating.service";

@Component({
  selector: 'app-webinar-rating-list',
  templateUrl: './webinar-rating-list.component.html',
  styleUrls: ['./webinar-rating-list.component.css']
})
export class WebinarRatingListComponent implements OnInit {

  webinarRatings: WebinarRating[];

  constructor(private webinarRatingService: WebinarRatingService) {
  }

  ngOnInit() {
    this.listWebinarRatings();
  }

  listWebinarRatings() {
    this.webinarRatingService.getWebinarRatingList().subscribe(
      data => {
        this.webinarRatings = data;
      }
    )
  }

}
