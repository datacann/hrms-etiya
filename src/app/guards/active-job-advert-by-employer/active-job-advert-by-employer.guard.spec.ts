import { TestBed } from '@angular/core/testing';

import { ActiveJobAdvertByEmployerGuard } from './active-job-advert-by-employer.guard';

describe('ActiveJobAdvertByEmployerGuard', () => {
  let guard: ActiveJobAdvertByEmployerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActiveJobAdvertByEmployerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
