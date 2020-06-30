import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../common/post';
import {ActivatedRoute} from '@angular/router';

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
  thePageSize = 10;
  theTotalElements = 1;


  constructor(private postService: PostService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
    this.listPosts();
  });
}

listPosts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchPosts();
    }
    else {
      this.handleListPosts();
    }
  }

  handleSearchPosts() {

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    // now search for posts using keyword

    this.postService.searchPosts(theKeyword).subscribe(
      data => {
        this.posts = data;
      }
    );
  }

  handleListPosts() {
    // check if 'id' paramater is available
    const hasUserId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasUserId) {
      // get the 'id' param string. convert string to a number
      this.currentUserId = +this.route.snapshot.paramMap.get('id');
    }
    else {
      // user id avaialbe ... default user to all posts
      this.currentUserId = 1;
    }

    // Check if we have a different user from previous
    // Note: Angular will reuse a component if it is currently being viewed

    this.postService.getPostList(this.currentUserId).subscribe(
      data => {
        this.posts = data;
      }
    );

    // now get the posts for the given user id than previous the set the page number back to 1
    if (this.previousUserId !== this.currentUserId) {
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

}
