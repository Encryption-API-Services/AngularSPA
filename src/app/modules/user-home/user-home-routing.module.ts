import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { ApiKeyComponent } from './api-key/api-key.component';
import { PaymentInformationComponent } from './payment-information/payment-information.component';
import { TwoFactorAuthenticationComponent } from './two-factor-authentication/two-factor-authentication.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {
    path: "", component: UserHomeComponent, canActivate: [AuthGuardService], children: [
      {
        path: "twofactor", component: TwoFactorAuthenticationComponent, canActivateChild: [AuthGuardService]
      },
      {
        path: "payment", component: PaymentInformationComponent, canActivate: [AuthGuardService]
      },
      {
        path: "apikey", component: ApiKeyComponent, canActivate: [AuthGuardService]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHomeRoutingModule { }
