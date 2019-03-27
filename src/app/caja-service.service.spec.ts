import { TestBed } from '@angular/core/testing';

import { CajaService } from './caja-service.service';

describe('CajaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CajaService = TestBed.get(CajaService);
    expect(service).toBeTruthy();
  });
});
