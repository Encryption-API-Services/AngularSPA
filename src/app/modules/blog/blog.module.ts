import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';


@NgModule({
  declarations: [
    BlogHomeComponent,
    BlogAdminComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
