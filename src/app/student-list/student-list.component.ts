import {Component, OnInit} from '@angular/core';
import {Student} from '../model/student';
import {StudentManagmentService} from '../student-managment/student-managment.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private service: StudentManagmentService) {
  }

  ngOnInit(): void {
    this.service.getStudents().then(students => this.students = students);
  }
}
