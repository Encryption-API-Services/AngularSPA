import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { phoneNumberValidator } from 'src/app/validators/form-validators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-two-factor-authentication',
  templateUrl: './two-factor-authentication.component.html',
  styleUrls: ['./two-factor-authentication.component.css']
})
export class TwoFactorAuthenticationComponent implements OnInit {
  private apiUrl: string = environment.apiUrl + "TwoFA/Get2FAStatus";
  public is2FAOn: boolean = false;
  public canEdit2FAStatus: boolean = true;
  public phone2FAForm: FormGroup =  this.formBuilder.group({
    phoneNumber: ['', [Validators.required, phoneNumberValidator]]
  });
  
  constructor(private formBuilder: FormBuilder, private http: HttpService) { }

  ngOnInit(): void {
    this.GetPhone2FASettings();
  }

  private GetPhone2FASettings(): void {
    this.http.getAuthenticated(this.apiUrl).subscribe((response: any) => {
      console.log(response);
      this.is2FAOn = response.result;
    }, (error) => {
      this.is2FAOn = false;
    });
  }

  public edit2FAPhoneStatus(event: any): void {
    if (this.canEdit2FAStatus) {
      this.canEdit2FAStatus = false;
      if (event.target.checked) {
        this.turn2FAToOn();
      } else {
        this.turn2FAToOff();
      }
    }
  }

  private turn2FAToOn(): void {
    this.http.putAuthenticated(environment.apiUrl + "TwoFA/TurnOn2FA", null).subscribe((response: any) => {
      this.canEdit2FAStatus = true;
    }, (error) => {
      this.canEdit2FAStatus = true;
    });
  }

  private turn2FAToOff(): void {
    console.log("turn off 2fa");
    this.http.putAuthenticated(environment.apiUrl + "TwoFA/TurnOff2FA", null).subscribe((response: any) => {
      this.canEdit2FAStatus = true;
    }, (error) => {
      this.canEdit2FAStatus = true;
    });
  }
}
