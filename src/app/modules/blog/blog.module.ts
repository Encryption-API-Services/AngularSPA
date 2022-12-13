import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { CreateBlogPostComponent } from './create-blog-post/create-blog-post.component';
import { NgxEditorModule } from 'ngx-editor';
import { ReactiveFormsModule } from '@angular/forms';
import { StandardDatePipe } from 'src/app/pipes/standard-date.pipe';


@NgModule({
  declarations: [
    BlogHomeComponent,
    BlogAdminComponent,
    CreateBlogPostComponent,
    StandardDatePipe
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgxEditorModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
