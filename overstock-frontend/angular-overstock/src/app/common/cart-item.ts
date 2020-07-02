import {Post} from './post';

export class CartItem {

  id: number;
  title: string;
  description: string;
  createdAt: Date;
  enabled: boolean;

  quantity: number;
  unitPrice: number;

  constructor(post: Post) {
    this.id = post.id;
    this.title = post.title;
    this.description = post.description;
    this.createdAt = post.createdAt;
    this.enabled = post.enabled;
    this.unitPrice = 1.99;
    this.quantity = 1;
  }

}
