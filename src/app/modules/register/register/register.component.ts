// deno-lint-ignore-file no-inferrable-types
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { passwordValidator } from "../../../validators/form-validators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public isFormValid: boolean = false;
  public isSubmitClicked: boolean = false; 
  public registerForm: FormGroup = this.formBuilder.group({
    email: ['mtmulch0191@outlook.com',
      [Validators.required, Validators.email]
    ],
    username: ['mtmulch', [Validators.required, Validators.minLength(6)]],
    password: ['Testing1234!@', [passwordValidator]]
  });

  constructor(private formBuilder: FormBuilder, private http: HttpService) {

  }


  ngOnInit(): void {

  }

  public handleFormSubmit($event: any) {
    this.isSubmitClicked = true;
    if (this.registerForm.valid) {
      this.isFormValid = true;
      this.http.post("/api/UserRegister/", this.createFormObject()).subscribe(response => {
        console.log(response);
      }, (error) => {
        console.error(error);
      })
    } else {
      this.isFormValid = false;
    }
  }

  private createFormObject() {
    return {
      "username": this.registerForm.value.username,
      "email": this.registerForm.value.email,
      "password": this.registerForm.value.password
    }
  }
}
