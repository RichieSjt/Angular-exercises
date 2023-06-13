import { Component } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loadedPosts = [];
  isLoading = false;
  error = null;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postsService
      .createPost(postData.title, postData.content)
      .subscribe((res) => {
        console.log(res)
        this.loadedPosts.push(postData);
      });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  fetchPosts() {
    this.isLoading = true;
    this.postsService.fetchPosts().subscribe({
      next: (posts) => {
        this.isLoading = false;
        this.loadedPosts = posts;
      },
      error: (error) => {
        this.isLoading = false;
        this.error = error.message;
      },
      // complete: () => {
      //   console.log('you can omit complete block');
      // },
    });
  }
  acknowledgeError() {
    this.error = null
  }
}
