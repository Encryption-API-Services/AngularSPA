import { TestBed } from '@angular/core/testing';

import { NavbarEmitterService } from './navbar-emitter.service';

describe('NavbarEmitterService', () => {
  let service: NavbarEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
