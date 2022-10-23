import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivateRoutingModule } from './activate-routing.module';
import { ActivateComponent } from './activate/activate.component';


@NgModule({
  declarations: [
    ActivateComponent
  ],
  imports: [
    CommonModule,
    ActivateRoutingModule
  ]
})
export class ActivateModule { }
