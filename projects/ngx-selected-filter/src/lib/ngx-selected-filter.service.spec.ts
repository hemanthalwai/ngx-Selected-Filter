import { TestBed } from '@angular/core/testing';

import { NgxSelectedFilterService } from './ngx-selected-filter.service';

describe('NgxSelectedFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSelectedFilterService = TestBed.get(NgxSelectedFilterService);
    expect(service).toBeTruthy();
  });
});
