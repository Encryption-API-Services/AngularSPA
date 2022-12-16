import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from 'src/app/services/blog.service';
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
    private blogService: BlogService,
    private title: Title
    ) { }

  ngOnInit(): void {
    this.title.setTitle("Blog | Encryption API Services");
    this.getHomeBlogPosts();
  }

  public getHomeBlogPosts(): void {
    this.httpService.get(environment.apiUrl + "Blog/GetBlogPosts").subscribe((response: any) => {
      this.blogPosts = response.posts;
    }, (error) => {
      this.toastr.error("", error.error.error);
    });
  }

  public navigateToBlogPost(postTitle: string): void {
    this.blogService.navigateToBlogPost(postTitle);
  }
}