import { TestBed, inject } from '@angular/core/testing';

import { StudentManagmentService } from './student-managment.service';

describe('StudentManagmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentManagmentService]
    });
  });

  it('should be created', inject([StudentManagmentService], (service: StudentManagmentService) => {
    expect(service).toBeTruthy();
  }));
});
