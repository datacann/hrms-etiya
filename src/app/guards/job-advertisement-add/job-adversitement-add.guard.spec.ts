import { TestBed } from '@angular/core/testing';

import { JobAdversitementAddGuard } from './job-adversitement-add.guard';

describe('JobAdversitementAddGuard', () => {
  let guard: JobAdversitementAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JobAdversitementAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
