import { TestBed } from '@angular/core/testing';

import { EdlSService } from './edl-s.service';

describe('EdlSService', () => {
  let service: EdlSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdlSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
