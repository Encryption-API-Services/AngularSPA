import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  private apiUrl: string = environment.apiUrl + "Password/ForgotPassword";
  public isFormSubmitted: boolean = false;

  public forgotPasswordForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpService,
    private toastr: ToastrService, 
    private title: Title
    ) { }

  ngOnInit(): void {
    this.title.setTitle("Forgot Password | Encryption API Services");
  }

  public handleKeyPress(event: any): void {
    if (event.keyCode === 13) {
      this.handleSubmit(event);
    }
  }

  public handleSubmit(event: any): void {
    this.isFormSubmitted = true;
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.value["email"]
      this.http.post(this.apiUrl, { email: email }).subscribe((response: any) => {
        console.log(response);
        this.isFormSubmitted = false;
        this.forgotPasswordForm.reset();
        this.toastr.success("", response.message);
      }, (error) => {
        this.isFormSubmitted = false;
      });
    } else {
      this.isFormSubmitted = false;
    }
  }
}