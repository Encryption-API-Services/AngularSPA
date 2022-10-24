import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import LoginUserFormObject from 'src/app/models/LoginUserFormObject';
import { HttpService } from 'src/app/services/http.service';
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
  constructor(private formBuilder: FormBuilder, private http: HttpService) { }

  ngOnInit(): void {

  }

  public handleFormSubmit($event: any) {
    this.isSubmitClicked = true;
    if (this.loginForm.valid) {
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

  private createFormObject(): LoginUserFormObject {
    return new LoginUserFormObject(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
  }
}
