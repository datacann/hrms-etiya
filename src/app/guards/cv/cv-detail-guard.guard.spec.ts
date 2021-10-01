import { TestBed } from '@angular/core/testing';

import { CvDetailGuardGuard } from './cv-detail-guard.guard';

describe('CvDetailGuardGuard', () => {
  let guard: CvDetailGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CvDetailGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
