import { Component, OnInit } from '@angular/core';
import { Posts, PostsInfo } from 'src/app/interfaces/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: PostsInfo[] = [];

  constructor(private service: PostsService) {
    this.service.getPosts().subscribe(({ data: postsData }: Posts) => {
      postsData.forEach(({ date }, idx) => {
        const newDate = new Date(date);
        postsData[idx].day = newDate.getDate() || 1;
        postsData[idx].month = newDate.toLocaleString('default', {
          month: 'short',
        });
      });

      this.posts = postsData;
    });
  }

  ngOnInit(): void {}
}
