import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts, Comments } from '../interfaces/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Posts>('http://localhost:3000/post');
  }

  getComments() {
    return this.http.get<Comments>('http://localhost:3000/comments');
  }
}
