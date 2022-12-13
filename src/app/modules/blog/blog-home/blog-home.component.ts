import { Component, OnInit } from '@angular/core';
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
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.getHomeBlogPosts();
  }

  public getHomeBlogPosts(): void {
    this.httpService.get(environment.apiUrl + "Blog/GetBlogPosts").subscribe((response: any) => {
      console.log(response);
      this.blogPosts = response.posts;
    });
  }
}