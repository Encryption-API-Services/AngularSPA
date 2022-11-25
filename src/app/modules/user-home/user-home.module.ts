import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TwoFactorAuthenticationComponent } from './two-factor-authentication/two-factor-authentication.component';
import { SuccessfulLoginsComponent } from './successful-logins/successful-logins.component';
import { PaymentInformationComponent } from './payment-information/payment-information.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    TwoFactorAuthenticationComponent,
    SuccessfulLoginsComponent,
    PaymentInformationComponent
  ],
  imports: [
    CommonModule,
    UserHomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserHomeModule { }
