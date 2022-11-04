import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnlockAccountRoutingModule } from './unlock-account-routing.module';
import { UnlockAccountComponent } from './unlock-account/unlock-account.component';


@NgModule({
  declarations: [
    UnlockAccountComponent
  ],
  imports: [
    CommonModule,
    UnlockAccountRoutingModule
  ]
})
export class UnlockAccountModule { }
