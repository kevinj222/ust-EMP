import { TestBed } from '@angular/core/testing';

import { EmployeeRegService } from './employee-reg.service';

describe('EmployeeRegService', () => {
  let service: EmployeeRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
