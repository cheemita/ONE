export interface Posts {
  data: PostsInfo[];
  meta: number;
}

export interface PostsInfo {
  tittle: string;
  description: string;
  date: string;
  user: string;
  section: string;
  comment: string;
  id: number;
  day: number;
  month: string;
}


export interface Comments {
    data: CommentsInfo[];
    meta: number;
}

export interface CommentsInfo {
    id:      number;
    comment: string;
    user:    string;
    idpost:  number;
}
