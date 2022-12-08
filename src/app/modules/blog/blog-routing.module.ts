import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuardService } from 'src/app/services/admin-auth-guard.service';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';

const routes: Routes = [
  { path: "", component: BlogHomeComponent },
  {path: "admin", component: BlogAdminComponent, canActivate: [AdminAuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
