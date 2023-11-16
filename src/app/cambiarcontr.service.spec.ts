import { TestBed } from '@angular/core/testing';

import { CambiarcontrService } from './cambiarcontr.service';

describe('CambiarcontrService', () => {
  let service: CambiarcontrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CambiarcontrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
