import { TestBed } from '@angular/core/testing';

import { JobPositionAddGuard } from './job-position-add.guard';

describe('JobPositionAddGuard', () => {
  let guard: JobPositionAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JobPositionAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
