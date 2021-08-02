import { TestBed } from '@angular/core/testing';

import { NgxNewrelicService } from './ngx-newrelic.service';

describe('NgxNewrelicService', () => {
  let service: NgxNewrelicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNewrelicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
