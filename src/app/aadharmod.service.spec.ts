import { TestBed } from '@angular/core/testing';

import { AadharmodService } from './aadharmod.service';

describe('AadharmodService', () => {
  let service: AadharmodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AadharmodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
