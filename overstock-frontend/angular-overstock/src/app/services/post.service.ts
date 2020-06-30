import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../common/post';
import {map} from 'rxjs/operators';
import {User} from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = `http://localhost:8081/api/posts`;
  private userUrl = `http://localhost:8081/api/users`;

  constructor(private httpClient: HttpClient) {
  }

  getPost(thePostId: number): Observable<Post> {

    // need to build URL based on post id
    const postUrl = `${this.baseUrl}/${thePostId}`;

    return this.httpClient.get<Post>(postUrl);
  }

  getPostListPaginate(thePage: number,
                      thePageSize: number,
                      theUserId: number): Observable<GetResponsePosts> {

    // need to build URL based on User Id, page and size
    const searchUrl = `${this.baseUrl}/search/findByUserId?id=${theUserId}`
      + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponsePosts>(searchUrl);
  }

  getPostList(theUserId: number): Observable<Post[]> {

    // need to build URL based on User Id
    const searchUrl = `${this.baseUrl}/search/findByUserId?id=${theUserId}`;

    return this.getPosts(searchUrl);
  }

  searchPosts(theKeyword: string): Observable<Post[]> {
    // need to build URL based on keyword
    const searchUrl = `${this.baseUrl}/search/findByTitleContaining?title=${theKeyword}`;

    return this.getPosts(searchUrl);
  }

  searchPostsPaginate(thePage: number,
                      thePageSize: number,
                      theKeyword: string): Observable<GetResponsePosts> {

    // need to build URL based on keyword
    const searchUrl = `${this.baseUrl}/search/findByTitleContaining?title=${theKeyword}`
      + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponsePosts>(searchUrl);
  }

  private getPosts(searchUrl: string): Observable<Post[]> {
    return this.httpClient.get<GetResponsePosts>(searchUrl).pipe(
      map(response => response._embedded.posts)
    );
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<GetResponseUsers>(this.userUrl).pipe(
      map(response => response._embedded.users)
    );
  }


}

interface GetResponsePosts {
  _embedded: {
    posts: Post[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseUsers {
  _embedded: {
    users: User[];
  }
}
