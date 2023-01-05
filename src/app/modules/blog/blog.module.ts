import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { CreateBlogPostComponent } from './create-blog-post/create-blog-post.component';
import { NgxEditorModule } from 'ngx-editor';
import { ReactiveFormsModule } from '@angular/forms';
import { StandardDatePipe } from 'src/app/pipes/standard-date.pipe';
import { BlogEllipsisPipe } from 'src/app/pipes/blog-ellipsis.pipe';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { EditBlogPostComponent } from './edit-blog-post/edit-blog-post.component';
import { BlogManagementListComponent } from './blog-management-list/blog-management-list.component';
import { BlogNewsletterComponent } from './blog-newsletter/blog-newsletter.component';


@NgModule({
  declarations: [
    BlogHomeComponent,
    BlogAdminComponent,
    CreateBlogPostComponent,
    StandardDatePipe,
    BlogEllipsisPipe,
    BlogPostComponent,
    EditBlogPostComponent,
    BlogManagementListComponent,
    BlogNewsletterComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgxEditorModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
