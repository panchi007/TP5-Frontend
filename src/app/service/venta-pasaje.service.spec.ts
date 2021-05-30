import { TestBed } from '@angular/core/testing';

import { VentaPasajeService } from './venta-pasaje.service';

describe('VentaPasajeService', () => {
  let service: VentaPasajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaPasajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
