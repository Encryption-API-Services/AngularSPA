import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnlockAccountComponent } from './unlock-account/unlock-account.component';

const routes: Routes = [
  { path: "", component: UnlockAccountComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnlockAccountRoutingModule { }
