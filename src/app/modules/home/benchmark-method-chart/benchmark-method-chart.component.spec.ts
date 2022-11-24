import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkMethodChartComponent } from './benchmark-method-chart.component';

describe('BenchmarkMethodChartComponent', () => {
  let component: BenchmarkMethodChartComponent;
  let fixture: ComponentFixture<BenchmarkMethodChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenchmarkMethodChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenchmarkMethodChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
