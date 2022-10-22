// deno-lint-ignore-file no-inferrable-types
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import RegisterUserFormObject from 'src/app/models/RegisterUserFormObject';
import { HttpService } from 'src/app/services/http.service';
import { passwordValidator } from "../../../validators/form-validators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private apiUrl: string = "/api/UserRegister/";
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

  constructor(private formBuilder: FormBuilder, private http: HttpService) {

  }


  ngOnInit(): void {

  }

  public handleFormSubmit($event: any) {
    this.isSubmitClicked = true;
    if (this.registerForm.valid) {
      this.isFormValid = true;
      this.http.post(this.apiUrl, this.createFormObject()).subscribe(response => {
        console.log(response);
      }, (error) => {
        console.error(error);
      })
    } else {
      this.isFormValid = false;
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
