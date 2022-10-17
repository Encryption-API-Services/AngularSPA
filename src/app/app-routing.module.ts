import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "register", loadChildren: () => import(`./modules/register/register.module`).then(module => module.RegisterModule) },
  { path: "login", loadChildren: () => import(`./modules/login/login.module`).then(module => module.LoginModule) },
  { path: "about", loadChildren: () => import(`./modules/about/about.module`).then(module => module.AboutModule) }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
