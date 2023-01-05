import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-newsletter',
  templateUrl: './blog-newsletter.component.html',
  styleUrls: ['./blog-newsletter.component.css']
})
export class BlogNewsletterComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  public handleFormSubmit(event: any): void {
    if (this.form.valid) {
      const body = { email: this.form.value['email'] };
      this.httpService.post(environment.apiUrl + "Blog/Newsletter", body).subscribe((response:any ) => {
        this.toastr.success("", response.message);
        this.form.reset();
      }, (error) => {
        this.toastr.error("", error.error.error);
      })
    }
  }
}