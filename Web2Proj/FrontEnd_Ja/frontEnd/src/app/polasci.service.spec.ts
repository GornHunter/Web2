import { TestBed } from '@angular/core/testing';

import { PolasciService } from './polasci.service';

describe('PolasciService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolasciService = TestBed.get(PolasciService);
    expect(service).toBeTruthy();
  });
});
