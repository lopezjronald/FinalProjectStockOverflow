import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostListComponent} from './components/post-list/post-list.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services/post.service';
import {UserListComponent} from './components/user-list/user-list.component';
import {StockListComponent} from './components/stock-list/stock-list.component';
import {ResourceListComponent} from './components/resource-list/resource-list.component';
import {CommentListComponent} from './components/comment-list/comment-list.component';
import {WebinarListComponent} from './components/webinar-list/webinar-list.component';
import {CommentService} from './services/comment.service';
import {UserService} from './services/user.service';
import {WebinarService} from './services/webinar.service';
import {ResourceService} from './services/resource.service';
import {StockService} from './services/stock.service';
import {UserStockJournalListComponent} from './components/user-stock-journal-list/user-stock-journal-list.component';
import {UserStockJournalService} from './services/user-stock-journal.service';
import {WebinarRatingService} from './services/webinar-rating.service';
import {CommentRatingService} from './services/comment-rating.service';
import {CommentRatingListComponent} from './components/comment-rating-list/comment-rating-list.component';
import {WebinarRatingListComponent} from './components/webinar-rating-list/webinar-rating-list.component';

import {RouterModule, Routes} from '@angular/router';
import {PostUserMenuComponent} from './components/post-user-menu/post-user-menu.component';
import {SearchComponent} from './components/search/search.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CartStatusComponent} from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';

const routes: Routes = [
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'posts/:id', component: PostDetailsComponent},
  {path: 'search/:keyword', component: PostListComponent},
  {path: 'user/:id', component: PostListComponent},
  {path: 'user', component: PostListComponent},
  {path: 'posts', component: PostListComponent},
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: '**', redirectTo: '/posts', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    UserListComponent,
    StockListComponent,
    ResourceListComponent,
    CommentListComponent,
    WebinarListComponent,
    UserStockJournalListComponent,
    CommentRatingListComponent,
    WebinarRatingListComponent,
    PostUserMenuComponent,
    SearchComponent,
    PostDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    WebinarRatingService,
    CommentRatingService,
    UserStockJournalService,
    PostService,
    CommentService,
    UserService,
    WebinarService,
    ResourceService,
    StockService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
