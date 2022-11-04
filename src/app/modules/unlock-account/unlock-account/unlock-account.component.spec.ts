import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockAccountComponent } from './unlock-account.component';

describe('UnlockAccountComponent', () => {
  let component: UnlockAccountComponent;
  let fixture: ComponentFixture<UnlockAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnlockAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
