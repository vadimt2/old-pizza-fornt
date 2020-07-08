import { TestBed } from '@angular/core/testing';

import { OrderDataAppService } from './order-data-app.service';

describe('OrderDataAppService', () => {
  let service: OrderDataAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderDataAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
