// deno-lint-ignore-file no-inferrable-types
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder) {

  }


  ngOnInit(): void {

  }

  public handleFormSubmit($event: any) {
    this.isSubmitClicked = true;
    if (this.registerForm.valid) {
      this.isFormValid = true;

    } else {
      console.log("invalid");
      this.isFormValid = false;
    }
  }
}
