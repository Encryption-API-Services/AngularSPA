import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { PaymentInformationComponent } from './payment-information/payment-information.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {
    path: "", component: UserHomeComponent, canActivate: [AuthGuardService], children: [
      {
        path: "payment", component: PaymentInformationComponent, canActivate: [AuthGuardService]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHomeRoutingModule { }
