import { Component, OnInit } from '@angular/core';
import {Post} from '../../common/post';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {CartItem} from '../../common/cart-item';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post = new Post();

  constructor(private postService: PostService,
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handlePostDetails();
    });
  }

  private handlePostDetails() {
    // get the 'id' param string. convert string to a number using the '+' symbol
    const thePostId: number = +this.route.snapshot.paramMap.get('id');

    this.postService.getPost(thePostId).subscribe(
      data => {
        this.post = data;
      }
    );
  }

  addToCart() {
    console.log(`Adding to cart: ${this.post.title}, ${this.post.unitPrice}`);
    const theCartItem = new CartItem(this.post);
    this.cartService.addToCart(theCartItem);
  }
}
