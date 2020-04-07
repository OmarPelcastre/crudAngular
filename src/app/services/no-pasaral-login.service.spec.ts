import { TestBed } from '@angular/core/testing';

import { NoPasaralLoginService } from './no-pasaral-login.service';

describe('NoPasaralLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoPasaralLoginService = TestBed.get(NoPasaralLoginService);
    expect(service).toBeTruthy();
  });
});
