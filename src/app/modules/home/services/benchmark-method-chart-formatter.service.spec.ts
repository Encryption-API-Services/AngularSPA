import { TestBed } from '@angular/core/testing';

import { BenchmarkMethodChartFormatterService } from './benchmark-method-chart-formatter.service';

describe('BenchmarkMethodChartFormatterService', () => {
  let service: BenchmarkMethodChartFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenchmarkMethodChartFormatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
