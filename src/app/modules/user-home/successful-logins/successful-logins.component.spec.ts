import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulLoginsComponent } from './successful-logins.component';

describe('SuccessfulLoginsComponent', () => {
  let component: SuccessfulLoginsComponent;
  let fixture: ComponentFixture<SuccessfulLoginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulLoginsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulLoginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
