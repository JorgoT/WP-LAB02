import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../model/student';
import {StudentManagmentService} from '../student-managment/student-managment.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html'
})

export class StudentDetailsComponent implements OnInit {
  student: Student;

  constructor(private service: StudentManagmentService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    this.route.paramMap.switchMap((params: ParamMap) => this.service.getStudent(+params.get('index')))
      .subscribe(student => this.student = student);
  }
}
