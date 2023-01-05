import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNewsletterComponent } from './blog-newsletter.component';

describe('BlogNewsletterComponent', () => {
  let component: BlogNewsletterComponent;
  let fixture: ComponentFixture<BlogNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogNewsletterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
