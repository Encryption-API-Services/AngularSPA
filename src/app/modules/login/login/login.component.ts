import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import LoginUserFormObject from 'src/app/models/LoginUserFormObject';
import { HttpService } from 'src/app/services/http.service';
import { NavbarEmitterService } from 'src/app/services/navbar-emitter.service';
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
  public loginForm: FormGroup = this.formBuilder.group({
    email: ['',
      [Validators.required, Validators.email]
    ],
    password: ['', 
      [Validators.required, passwordValidator]]
  });
  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpService,
    private router: Router,
    private navbarEmitter: NavbarEmitterService,
    private toastr: ToastrService
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
        //check if user has token stored
        this.router.navigate(['/twofa']);




        // this.navbarEmitter.navbarEvents("user-logged-in");
        // this.router.navigate(['/user-home']);
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
      this.loginForm.value.password
    );
  }

  public handleEnterPress(event: any): void {
    if (event.keyCode === 13) {
      this.handleFormSubmit(event);
    }
  }
}
