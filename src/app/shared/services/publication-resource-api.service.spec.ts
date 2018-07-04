import { TestBed, inject } from '@angular/core/testing';

import { PublicationResourceApiService } from './publication-resource-api.service';

describe('PublicationResourceApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicationResourceApiService]
    });
  });

  it('should be created', inject([PublicationResourceApiService], (service: PublicationResourceApiService) => {
    expect(service).toBeTruthy();
  }));
});
