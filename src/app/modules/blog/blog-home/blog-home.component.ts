import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { BlogPost } from '../types/BlogPost';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  public blogPosts: Array<BlogPost>;

  constructor(
    private httpService: HttpService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getHomeBlogPosts();
  }

  public getHomeBlogPosts(): void {
    this.httpService.get(environment.apiUrl + "Blog/GetBlogPosts").subscribe((response: any) => {
      this.blogPosts = response.posts;
    });
  }

  public navigateToBlogPost(postTitle: string): void {
    let title = postTitle.replace(/ /g, "-");
    this.router.navigate([`/blog/blog-post/${title}`]);
  }
}