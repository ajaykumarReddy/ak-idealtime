import { TestBed } from '@angular/core/testing';

import { AkIdealtimeService } from './ak-idealtime.service';

describe('AkIdealtimeService', () => {
  let service: AkIdealtimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AkIdealtimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
