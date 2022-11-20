import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import LoginUserFormObject from 'src/app/models/LoginUserFormObject';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { HttpService } from 'src/app/services/http.service';
import { NavbarEmitterService } from 'src/app/services/navbar-emitter.service';
import { UserAgentService } from 'src/app/services/user-agent.service';
import { passwordValidator } from 'src/app/validators/form-validators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private apiUrl: string = environment.apiUrl + "UserLogin";
  public isFormValid: boolean = false;
  public isSubmitClicked: boolean = false;
  public isTwoFactorForm: boolean = false;
  public isTwoFactorFormSubmitted: boolean = false;
  public loginForm: FormGroup = this.formBuilder.group({
    email: ['mtmulch0191@outlook.com',
      [Validators.required, Validators.email]
    ],
    password: ['Testing12345!@',
      [Validators.required, passwordValidator]]
  });
  public twoFAForm: FormGroup = this.formBuilder.group({
    code: ['93974716', [Validators.required, Validators.minLength(8)]]
  });


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private router: Router,
    private navbarEmitter: NavbarEmitterService,
    private toastr: ToastrService,
    private authGuard: AuthGuardService,
    private userAgent: UserAgentService
  ) { }

  ngOnInit(): void {

  }

  public handleFormSubmit($event: any) {
    if (this.loginForm.valid && !this.isSubmitClicked) {
      this.isSubmitClicked = true;
      this.isFormValid = true;
      this.http.post(this.apiUrl, this.createFormObject()).subscribe((response: any) => {
        this.toastr.success("", response.message);
        this.isSubmitClicked = false;
        this.loginForm.reset();
        localStorage.setItem("token", response.token);
        // check if user has token stored
        if (response.twoFactorAuth === true) {
          this.isTwoFactorForm = true;
          this.navbarEmitter.navbarEvents("user-logged-in");
        } else {
          this.router.navigate(['/user-home']);
        }
      }, (error) => {
        console.error(error);
        this.toastr.error("", error.error.error);
        this.isSubmitClicked = false;
      })
    } else {
      this.isFormValid = false;
    }
  }

  private createFormObject(): LoginUserFormObject {
    return new LoginUserFormObject(
      this.loginForm.value.email,
      this.loginForm.value.password,
      this.userAgent.getUserAgent()
    );
  }

  public handleEnterPress(event: any): void {
    if (event.keyCode === 13) {
      this.handleFormSubmit(event);
    }
  }


  public handleTwoFactorEnterPress(event: any): void {
    if (event.keyCode === 13) {
      this.twoFactorCodeSubmit(event);
    }
  }


  public twoFactorCodeSubmit(event: any): void {
    if (!this.isTwoFactorFormSubmitted && this.twoFAForm.valid) {
      this.isTwoFactorFormSubmitted = true;
      let decodedToken = this.authGuard.getDecodedToken();
      let body = this.getPutTwoFAVerificationBody(decodedToken);
      this.http.putAuthenticated(environment.apiUrl + "UserLogin/ValidateHotpCode", body).subscribe((response: any) => {
        this.isTwoFactorFormSubmitted = false;
        this.toastr.success(response.message, "");
        setTimeout(() => {
          this.router.navigate(['/user-home']);
        }, 1500)
      }, (error) => {
        this.isTwoFactorFormSubmitted = false;
        this.toastr.error(error.error.error, "");
      });
    }
  }

  private getPutTwoFAVerificationBody(decodedToken: any): object {
    return {
      "UserId": decodedToken["id"],
      "HotpCode": this.twoFAForm.value["code"]
    }
  }
}
