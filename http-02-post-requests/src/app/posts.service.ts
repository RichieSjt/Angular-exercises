import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url =
    'https://angular-complete-guide-cc871-default-rtdb.firebaseio.com/posts.json';

  createPost(title: string, content: string) {
    const postData: Post = {
      title,
      content,
    };
    // Send Http request
    return this.http
      .post<{ name: string }>(
        this.url,
        postData,
        {
          // Getting full response instead of only the body
          observe: 'response',
          // responseType: 'text'
        }
      )
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('test', 'aaaaaa');

    return this.http
      .get<{ [key: string]: Post }>(
        this.url,
        {
          headers: new HttpHeaders({
            "Custom-header": "hello"
          }),
          params: searchParams
        }
      )
      .pipe(
        map((data) => {
          // Transforming data
          const postsArray: Post[] = [];

          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              postsArray.push({ ...data[key], id: key });
            }
          }

          return postsArray;
        }),
        catchError(error => {
          // Send to analytics or do some processing
          return throwError(error)
        })
      );
  }

  deletePosts() {
    return this.http.delete(this.url);
  }

  constructor(private http: HttpClient) {}
}
