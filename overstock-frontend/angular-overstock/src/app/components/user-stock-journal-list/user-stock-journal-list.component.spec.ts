import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStockJournalListComponent } from './user-stock-journal-list.component';

describe('UserStockJournalListComponent', () => {
  let component: UserStockJournalListComponent;
  let fixture: ComponentFixture<UserStockJournalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStockJournalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStockJournalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
