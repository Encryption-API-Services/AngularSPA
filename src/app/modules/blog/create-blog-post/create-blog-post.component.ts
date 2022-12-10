import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-blog-post',
  templateUrl: './create-blog-post.component.html',
  styleUrls: ['./create-blog-post.component.css']
})
export class CreateBlogPostComponent implements OnInit, OnDestroy {
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
    private formBuilder: FormBuilder,
    private httpService: HttpService
    ) {

   }



  ngOnInit(): void {
    this.editor = new Editor();
    this.createFormGroup();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  private createFormGroup(): void {
    this.form = this.formBuilder.group({
      blogPostTitle: ["", Validators.required],
      blogPostInput: ["", Validators.required]
    });
  }

  public handleSubmit(): void {
    if (this.form.valid) {
      const body = {
        PostTitle: this.form.value["blogPostTitle"],
        PostBody: this.form.value["blogPostInput"]
      };
      console.log(body);      
      this.httpService.postAuthenticated(environment.apiUrl + "Blog/CreatePost", body).subscribe(response => {
        console.log(response);
      }, (error) => {

      });
    }
  }
}