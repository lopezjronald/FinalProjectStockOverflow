import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentRatingListComponent } from './comment-rating-list.component';

describe('CommentRatingListComponent', () => {
  let component: CommentRatingListComponent;
  let fixture: ComponentFixture<CommentRatingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentRatingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentRatingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
