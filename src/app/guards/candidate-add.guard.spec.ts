import { TestBed } from '@angular/core/testing';

import { CandidateAddGuard } from './candidate-add.guard';

describe('CandidateAddGuard', () => {
  let guard: CandidateAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
