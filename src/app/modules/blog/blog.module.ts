import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { CreateBlogPostComponent } from './create-blog-post/create-blog-post.component';
import { NgxEditorModule } from 'ngx-editor';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BlogHomeComponent,
    BlogAdminComponent,
    CreateBlogPostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgxEditorModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
