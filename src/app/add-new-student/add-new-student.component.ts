import {Component, OnInit} from '@angular/core';
import {Student} from '../model/student';
import {StudentManagmentService} from '../student-managment/student-managment.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {isUndefined} from 'util';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css']
})
export class AddNewStudentComponent implements OnInit {
  student: Student = new Student('', '', '', '');
  number = '[0-9]{6,6}';
  nasokaRegex = '^(?:KNI|PET|MT)$';

  constructor(private service: StudentManagmentService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => this.service.getStudent(+params.get('index')))
      .subscribe(student => {
        this.student = student;
      });
  }

  onSubmit() {
    this.route.params.subscribe((params: ParamMap) => {
      const ind = params['index'];
      if (isUndefined(ind)) {
        this.service.saveStudent(this.student);
      } else {
        this.service.editStudent(ind, this.student);
      }
    });
  }
}
