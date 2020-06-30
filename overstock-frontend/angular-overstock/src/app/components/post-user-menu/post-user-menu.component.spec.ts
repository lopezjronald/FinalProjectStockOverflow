import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUserMenuComponent } from './post-user-menu.component';

describe('PostUserMenuComponent', () => {
  let component: PostUserMenuComponent;
  let fixture: ComponentFixture<PostUserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostUserMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
