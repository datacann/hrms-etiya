import { TestBed } from '@angular/core/testing';

import { ChangeActivityJobAdvertGuard } from './change-activity-job-advert.guard';

describe('ChangeActivityJobAdvertGuard', () => {
  let guard: ChangeActivityJobAdvertGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChangeActivityJobAdvertGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
