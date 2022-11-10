import { TestBed } from '@angular/core/testing';

import { GaleriaFotosService } from './galeria-fotos.service';

describe('GaleriaFotosService', () => {
  let service: GaleriaFotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaleriaFotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
