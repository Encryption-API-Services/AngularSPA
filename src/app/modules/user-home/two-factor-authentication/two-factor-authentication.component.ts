import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  public hasPhoneNumberBeenSubmitted: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.GetPhone2FASettings();
  }

  public handleKeyPressOnPhoneInput(event: any): void {
    event.target.value = event.target.value.replace(/[a-zA-Z!@#$%^&*()_+=-]/g, '');
    if (event.keyCode === 13) {
      this.isPhoneNumberValid(event);
    }
  }

  public isPhoneNumberValid(event: any): void {
    if (this.phone2FAForm.valid && !this.hasPhoneNumberBeenSubmitted) {
      this.hasPhoneNumberBeenSubmitted = true;
      this.http.putAuthenticated(environment.apiUrl + "TwoFA/UpdatePhoneNumber", this.getPhoneNumberChange()).subscribe((response: any) => {
        this.phone2FAForm.reset();
        this.toastr.success(response.message, "");
        this.hasPhoneNumberBeenSubmitted = false;
      }, (error) => {
        this.hasPhoneNumberBeenSubmitted = false;
        this.toastr.error(error.error.error, "");
      });
    }
  }

  private getPhoneNumberChange(): object {
    return {
      "phoneNumber": this.phone2FAForm.value["phoneNumber"]
    }
  }

  private GetPhone2FASettings(): void {
    this.http.getAuthenticated(this.apiUrl).subscribe((response: any) => {
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
    this.http.putAuthenticated(environment.apiUrl + "TwoFA/TurnOff2FA", null).subscribe((response: any) => {
      this.canEdit2FAStatus = true;
    }, (error) => {
      this.canEdit2FAStatus = true;
    });
  }
}
