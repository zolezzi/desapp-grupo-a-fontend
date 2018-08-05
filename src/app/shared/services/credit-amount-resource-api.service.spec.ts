import { TestBed, inject } from '@angular/core/testing';

import { CreditAmountResourceApiService } from './credit-amount-resource-api.service';

describe('CreditAmountResourceApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditAmountResourceApiService]
    });
  });

  it('should be created', inject([CreditAmountResourceApiService], (service: CreditAmountResourceApiService) => {
    expect(service).toBeTruthy();
  }));
});
