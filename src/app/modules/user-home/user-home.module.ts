import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TwoFactorAuthenticationComponent } from './two-factor-authentication/two-factor-authentication.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    TwoFactorAuthenticationComponent
  ],
  imports: [
    CommonModule,
    UserHomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserHomeModule { }
