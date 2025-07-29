import { TestBed } from '@angular/core/testing';

import { Indian } from './indian';

describe('Indian', () => {
  let service: Indian;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Indian);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
