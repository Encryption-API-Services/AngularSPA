import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private router: Router) { }

  public navigateToBlogPost(postTitle: string): void {
    let title = postTitle.replace(/ /g, "-");
    this.router.navigate([`/blog/blog-post/${title}`]);
  }

  public navigateToModifyBlogPost(id: string): void {
    this.router.navigate([`/blog/edit-post/${id}`]);
  }

  public navigateToBlogAdmin(): void {
    this.router.navigate(['/blog/admin']);
  }
}
