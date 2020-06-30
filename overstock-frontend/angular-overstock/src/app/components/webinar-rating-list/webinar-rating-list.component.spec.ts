import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarRatingListComponent } from './webinar-rating-list.component';

describe('WebinarRatingListComponent', () => {
  let component: WebinarRatingListComponent;
  let fixture: ComponentFixture<WebinarRatingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebinarRatingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarRatingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
