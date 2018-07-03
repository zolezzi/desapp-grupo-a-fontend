import { TestBed, inject } from '@angular/core/testing';

import { VehicleResourceApiService } from './vehicle-resource-api.service';

describe('VehicleResourceApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleResourceApiService]
    });
  });

  it('should be created', inject([VehicleResourceApiService], (service: VehicleResourceApiService) => {
    expect(service).toBeTruthy();
  }));
});
