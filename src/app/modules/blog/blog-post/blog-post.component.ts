import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { BlogPost } from '../types/BlogPost';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  public post: BlogPost;
  public isPostIn: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.getBlogPost();
  }

  private getBlogPost(): void {
    let title = this.route.snapshot.params["title"];
    this.httpService.get(environment.apiUrl + `Blog/GetPost/${title}`).subscribe((response: any) => {
      this.isPostIn = true;
      this.post = response.post;
    }, (error) => {
      this.toastr.error("", error.error);
    });
  }
}
