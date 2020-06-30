import { Component, OnInit } from '@angular/core';
import {User} from '../../common/user';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-user-menu',
  templateUrl: './post-user-menu.component.html',
  styleUrls: ['./post-user-menu.component.css']
})
export class PostUserMenuComponent implements OnInit {

  users: User[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.listUsers();
  }

  listUsers() {
    this.postService.getUsers().subscribe(
     data => {
       console.log('Post Users=' + JSON.stringify(data));
       this.users = data;
     }
    );
  }
}
