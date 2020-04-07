import { TestBed } from '@angular/core/testing';

import { NoPasaralDashboardService } from './no-pasaral-dashboard.service';

describe('NoPasaralDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoPasaralDashboardService = TestBed.get(NoPasaralDashboardService);
    expect(service).toBeTruthy();
  });
});
