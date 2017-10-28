import {Injectable} from '@angular/core';
import {Student} from '../model/student';

@Injectable()
export class StudentManagmentService {
  students: Student[] = [
    {ime: 'Ime1', prezime: 'Prezime1', nasoka: 'KNI', indeks: 131066},
    {ime: 'Ime2', prezime: 'Prezime2', nasoka: 'KNI', indeks: 131067},
    {ime: 'Ime3', prezime: 'Prezime3', nasoka: 'KNI', indeks: 131068},
    {ime: 'Ime4', prezime: 'Prezime4', nasoka: 'KNI', indeks: 131069}
  ];
  student: Student;

  getStudents(): Promise<Student[]> {
    return Promise.resolve(this.students);
  }

  getStudent(index: number): Promise<Student> {
    return this.getStudents().then(students => {
      for (let i = 0; i < students.length; ++i) {
        if (students[i].indeks === index) {
          return students[i];
        }
      }
      return new Student('', '', '', '');
    });
  }

  saveStudent(std: Student): void {
    this.students.push(std);
  }

  editStudent(ind: number, newValues: Student) {
    for (let i = 0; i < this.students.length; ++i) {
      if (this.students[i].indeks === ind) {
        this.students[i] = newValues;
      }
    }
  }
}
