import { TestBed } from '@angular/core/testing';

import { RedVoznjiService } from './red-voznji.service';

describe('RedVoznjiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedVoznjiService = TestBed.get(RedVoznjiService);
    expect(service).toBeTruthy();
  });
});
