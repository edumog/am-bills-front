import { TestBed } from '@angular/core/testing';

import { ClientsFacadeService } from './clients-facade.service';

describe('ClientsFacadeService', () => {
  let service: ClientsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
