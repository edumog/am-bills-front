import { TestBed } from '@angular/core/testing';

import { BillsFacadeService } from './bills-facade.service';

describe('BillsFacadeServiceService', () => {
  let service: BillsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
