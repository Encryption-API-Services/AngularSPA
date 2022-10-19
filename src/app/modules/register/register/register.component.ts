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

  public canSubmit: boolean = false;
  public submitClicked: boolean = false;
  public registerForm: FormGroup = this.formBuilder.group({
    email: ['',
           [Validators.required, Validators.email]
    ],
    username: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [passwordValidator]]
  });

  constructor(private formBuilder: FormBuilder) {
    
   }

  
  ngOnInit(): void {
    
  }
  
  public handleFormSubmit($event: any) {
    this.submitClicked = !this.submitClicked;
    console.log(this.registerForm);
    if (this.registerForm.valid) {
      console.log("Valid");
      this.canSubmit = true;
    } else {
      console.log("invalid");
      this.submitClicked = false;
    }
  }
}
