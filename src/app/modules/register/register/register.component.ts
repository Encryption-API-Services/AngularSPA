// deno-lint-ignore-file no-inferrable-types
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import RegisterUserFormObject from 'src/app/models/RegisterUserFormObject';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { passwordValidator } from "../../../validators/form-validators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private apiUrl: string = environment.apiUrl + "UserRegister";
  public isFormValid: boolean = false;
  public isSubmitClicked: boolean = false; 
  public registerForm: FormGroup = this.formBuilder.group({
    email: ['',
      [Validators.required, Validators.email]
    ],
    username: ['', 
      [Validators.required, Validators.minLength(6)]],
    password: ['', 
      [Validators.required, passwordValidator]]
  });

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpService,
    private toastr: ToastrService,
    private title: Title
    ) {

  }


  ngOnInit(): void {
    this.title.setTitle("Register | Encryption API Services");
  }

  public handleFormSubmit($event: any) {
    if (!this.isSubmitClicked && this.registerForm.valid) {
      this.isSubmitClicked = true;
      this.isFormValid = true;
      this.http.post(this.apiUrl, this.createFormObject()).subscribe((response: any) => {
        this.toastr.success("", response.message);
        this.registerForm.reset();
        this.isSubmitClicked = false;
      }, (error) => {
        console.error(error);
        this.toastr.error("", error.error.error);
        this.isSubmitClicked = false;
      })
    } else {
      this.isFormValid = false;
    }
  }

  public handleEnterPress(event: any): void {
    if (event.keyCode === 13) {
      this.handleFormSubmit(event);
    }
  }

  private createFormObject(): RegisterUserFormObject {
    return new RegisterUserFormObject( 
      this.registerForm.value.username,
      this.registerForm.value.email,
      this.registerForm.value.password
    );
  }
}
