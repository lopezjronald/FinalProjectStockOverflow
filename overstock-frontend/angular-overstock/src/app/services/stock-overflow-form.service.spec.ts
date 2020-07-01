import { TestBed } from '@angular/core/testing';

import { StockOverflowFormService } from './stock-overflow-form.service';

describe('StockOverflowFormService', () => {
  let service: StockOverflowFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockOverflowFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
