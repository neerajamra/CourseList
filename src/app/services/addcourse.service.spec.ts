import { TestBed } from '@angular/core/testing';

import { AddcourseService } from './addcourse.service';

describe('AddcourseService', () => {
  let service: AddcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
