import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { creditCardNumberValidator } from 'src/app/validators/form-validators';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.css']
})
export class PaymentInformationComponent implements OnInit {
  public paymentInfoForm: FormGroup =  this.formBuilder.group({
    creditCardNumber: ['', [Validators.required, creditCardNumberValidator]],
    expirationMonth: ['', [Validators.required, Validators.max(2)]],
    expirationYear: ['', [Validators.required, Validators.max(4)]],
    securityCode: ['', [Validators.required, Validators.max(3)]]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  public handlePaymentInformationSubmit($event: any): void {
    console.log(this.paymentInfoForm.valid);
  }
}
