import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsDonationsComponent } from './sponsors-donations.component';

describe('SponsorsDonationsComponent', () => {
  let component: SponsorsDonationsComponent;
  let fixture: ComponentFixture<SponsorsDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorsDonationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorsDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
