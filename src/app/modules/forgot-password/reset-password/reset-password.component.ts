import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';
import { passwordValidator } from 'src/app/validators/form-validators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  private apiUrl: string = environment.apiUrl + "Password/ResetPassword";
  public hasFormBeenSubmitted: boolean = false;

  public resetPasswordForm: FormGroup = this.formBuilder.group({
    password: ['', [Validators.required, passwordValidator]],
    confirmpassword: ['', [Validators.required, passwordValidator]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private title: Title
    ) { }

  ngOnInit(): void {
    this.title.setTitle("Reset Password | Encryption API Services");
  }

  public handleKeyDownOnForm(event: any): void {
    if (event.keyCode === 13) {
      this.handleSubmit(event);
    }
  }


  public handleSubmit(event: any): void {
    if (this.resetPasswordForm.valid && this.resetPasswordForm.value["password"] === this.resetPasswordForm.value["confirmpassword"]) {
      this.hasFormBeenSubmitted = true;
      const body = {
        id: this.router.snapshot.queryParamMap.get('id'),
        token: this.router.snapshot.queryParamMap.get('token'),
        password: this.resetPasswordForm.value["password"],
        confirmpassword: this.resetPasswordForm.value["confirmpassword"]
      };
      this.http.post(this.apiUrl, body).subscribe((response: any) => {
        this.hasFormBeenSubmitted = false;
        this.resetPasswordForm.reset();
        this.toastr.success("", "You have changed your password");
      }, (error) => {
        this.hasFormBeenSubmitted = false;
        this.toastr.error("", error.error.error);
      });
    }
  }
}
