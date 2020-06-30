import {Component, OnInit} from '@angular/core';
import {PostService} from 'src/app/services/post.service';
import {Post} from 'src/app/common/post';
import {ActivatedRoute} from '@angular/router';
import {CartItem} from '../../common/cart-item';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list-grid.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  currentUserId = 1;
  previousUserId = 1;
  searchMode = false;

  // new properties for pagination
  thePageNumber = 1;
  thePageSize = 5;
  theTotalElements = 0;

  previousKeyword: string = null;

  constructor(private postService: PostService,
              private cartService: CartService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listPosts();
    });
  }

  listPosts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchPosts();
    } else {
      this.handleListPosts();
    }
  }

  handleSearchPosts() {

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    // if we have a different keyword than previous then set thePageNumber to 1

    // tslint:disable-next-line:triple-equals
    if (this.previousKeyword != theKeyword) {
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeyword;

    console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);

    // now search for posts using keyword

    this.postService.searchPostsPaginate(this.thePageNumber - 1,
      this.thePageSize,
      theKeyword).subscribe(this.processResult());
  }

  handleListPosts() {
    // check if 'id' paramater is available
    const hasUserId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasUserId) {
      // get the 'id' param string. convert string to a number
      this.currentUserId = +this.route.snapshot.paramMap.get('id');
    } else {
      // user id avaialbe ... default user to all posts
      this.currentUserId = 1;
    }

    // now get the posts for the given user id than previous the set the page number back to 1
    // tslint:disable-next-line:triple-equals
    if (this.previousUserId != this.currentUserId) {
      this.thePageNumber = 1;
    }

    this.previousUserId = this.currentUserId;

    console.log(`currentUserId=${this.currentUserId}, thePageNumber=${this.thePageNumber}`);

    // now get the posts for the given user id
    this.postService.getPostListPaginate(this.thePageNumber - 1,
      this.thePageSize,
      this.currentUserId)
      .subscribe(this.processResult());

  }

  processResult() {
    return data => {
      this.posts = data._embedded.posts;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

  updatePageSize(pageSize: number) {
    this.thePageSize = pageSize;
    this.thePageNumber = 1;
    this.listPosts();
  }

  addToCart(thePost: Post) {
    console.log(`Adding to cart: ${thePost.title}, ${thePost.description}`);

    const theCartItem = new CartItem(thePost);

    this.cartService.addToCart(theCartItem);

  }
}



