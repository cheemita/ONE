import { Component, OnInit } from '@angular/core';
import { CommentsInfo, PostsInfo, Comments } from 'src/app/interfaces/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  postFound = false;
  post: PostsInfo[] = [];
  comments: CommentsInfo[] = [];

  constructor(private service: PostsService) {
    const iddelpost = new URLSearchParams(window.location.search).get('id');
      this.service.getPosts().subscribe(( data ) => {
          const dara = data.data
          this.post = dara.filter(({ id }) => Number(iddelpost) === id);
          const fechaxd = new Date(this.post[0].date);
          this.post[0].day = fechaxd.getDate();
          this.post[0].month = fechaxd.toLocaleString('default');

          if (this.post.length === 0) return;
          this.postFound = true;

          // Obtener comentarios jaja
          this.service
              .getComments()
              .subscribe(({ data: commentsData }: Comments) => {
                this.comments = commentsData.filter(
                  ({ idpost }) => Number(iddelpost) === idpost
              );
            });
      });
    }
  ngOnInit(): void { }
}
