import { TestBed } from '@angular/core/testing';

import { ChangeloginServiceService } from './changelogin-service.service';

describe('ChangeloginServiceService', () => {
  let service: ChangeloginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeloginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
