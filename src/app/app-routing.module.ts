import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: "register", loadChildren: () => import(`./modules/register/register.module`).then(module => module.RegisterModule) },
  { path: "login", loadChildren: () => import(`./modules/login/login.module`).then(module => module.LoginModule) },
  { path: "about", loadChildren: () => import(`./modules/about/about.module`).then(module => module.AboutModule) },
  { path: "activate", loadChildren: () => import(`./modules/activate/activate.module`).then(module => module.ActivateModule) },
  { path: "user-home", loadChildren: () => import(`./modules/user-home/user-home.module`).then(module => module.UserHomeModule), canActivate: [AuthGuardService] }
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
