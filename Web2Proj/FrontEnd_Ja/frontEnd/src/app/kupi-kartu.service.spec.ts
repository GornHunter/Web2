import { TestBed } from '@angular/core/testing';

import { KupiKartuService } from './kupi-kartu.service';

describe('KupiKartuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KupiKartuService = TestBed.get(KupiKartuService);
    expect(service).toBeTruthy();
  });
});
