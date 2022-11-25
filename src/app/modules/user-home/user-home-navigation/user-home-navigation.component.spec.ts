import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeNavigationComponent } from './user-home-navigation.component';

describe('UserHomeNavigationComponent', () => {
  let component: UserHomeNavigationComponent;
  let fixture: ComponentFixture<UserHomeNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHomeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
