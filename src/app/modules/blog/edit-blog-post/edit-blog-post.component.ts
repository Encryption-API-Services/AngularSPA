import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Editor, Toolbar, Validators } from 'ngx-editor';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { BlogPost } from '../types/BlogPost';

@Component({
  selector: 'app-edit-blog-post',
  templateUrl: './edit-blog-post.component.html',
  styleUrls: ['./edit-blog-post.component.css']
})
export class EditBlogPostComponent implements OnInit {
  public editor: Editor;
  public toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  public form: FormGroup;
  
  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.createFormGroup();
    this.editor = new Editor();
    let id = this.route.snapshot.url[1].path;
    this.httpService.getAuthenticated(environment.apiUrl + `Blog/${id}`).subscribe((response: any) => {
      let post = response.post as BlogPost;
      this.form.patchValue({
        blogPostTitle: post.blogTitle
      });
      this.editor.setContent(post.blogBody);
    });
  }

  private createFormGroup(): void {
    this.form = this.formBuilder.group({
      blogPostTitle: ["", Validators.required],
      blogPostInput: ["", Validators.required]
    });
  }
  public handleModify(): void {
    
  }
}
