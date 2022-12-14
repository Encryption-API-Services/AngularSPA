import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogManagementListComponent } from './blog-management-list.component';

describe('BlogManagementListComponent', () => {
  let component: BlogManagementListComponent;
  let fixture: ComponentFixture<BlogManagementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogManagementListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
