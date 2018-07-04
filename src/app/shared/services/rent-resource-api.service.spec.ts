import { TestBed, inject } from '@angular/core/testing';

import { RentResourceApiService } from './rent-resource-api.service';

describe('RentResourceApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentResourceApiService]
    });
  });

  it('should be created', inject([RentResourceApiService], (service: RentResourceApiService) => {
    expect(service).toBeTruthy();
  }));
});
