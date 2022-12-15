import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from 'src/app/services/blog.service';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { BlogPost } from '../types/BlogPost';

@Component({
  selector: 'app-blog-management-list',
  templateUrl: './blog-management-list.component.html',
  styleUrls: ['./blog-management-list.component.css']
})
export class BlogManagementListComponent implements OnInit {
  public posts: Array<BlogPost>;

  constructor(
    private httpService: HttpService,
    private blogService: BlogService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.getBlogPosts();
  }
  
  public getBlogPosts(): void {
    this.httpService.get(environment.apiUrl + "Blog/GetBlogPosts").subscribe((response: any) => {
      this.posts = response.posts;
    });
  }

  public viewBlogPost(title: string): void {
    this.blogService.navigateToBlogPost(title);
  }

  public modifyBlogPost(id: string): void {
    this.blogService.navigateToModifyBlogPost(id);
  }

  public deleteBlogPost(id: string): void {
    const body = {id: id};
    this.httpService.postAuthenticated(environment.apiUrl + `Blog/DeletePost`, body).subscribe(response => {
      this.toastr.success("", "Deleted Blog Post");
      this.getBlogPosts();
    });
  }
}
