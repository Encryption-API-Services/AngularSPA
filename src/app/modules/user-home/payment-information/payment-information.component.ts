import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AddCreditCardFormObject } from 'src/app/models/AddCreditCardFormObject';
import { HttpService } from 'src/app/services/http.service';
import { creditCardNumberValidator } from 'src/app/validators/form-validators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.css']
})
export class PaymentInformationComponent implements OnInit {
  public paymentInfoForm: FormGroup =  this.formBuilder.group({
    creditCardNumber: ['', [Validators.required, creditCardNumberValidator]],
    expirationMonth: ['', [Validators.required, Validators.min(2)]],
    expirationYear: ['', [Validators.required, Validators.min(4)]],
    securityCode: ['', [Validators.required, Validators.min(3)]]
  });

  public wasFormSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private toast: ToastrService
    ) { }

  ngOnInit(): void {

  }

  public handlePaymentInformationSubmit($event: any): void {
    if (!this.wasFormSubmitted && this.paymentInfoForm.valid) {
      this.wasFormSubmitted = true;
      let body = this.getFormData();
      this.http.postAuthenticated(environment.apiUrl + "Credit/AddCreditCard", body).subscribe(response => {
        this.wasFormSubmitted = false;
        this.paymentInfoForm.reset();
        this.toast.success("Updated Card Information", "")
      }, (error) => {
        this.wasFormSubmitted = false;
        this.toast.error("Something went wrong on our end please try again", "");
      });
    }
  }

  private getFormData(): AddCreditCardFormObject {
    return new AddCreditCardFormObject(
      this.paymentInfoForm.value["creditCardNumber"],
      this.paymentInfoForm.value["expirationMonth"],
      this.paymentInfoForm.value["expirationYear"],
      this.paymentInfoForm.value["securityCode"],
    );
  }
}
