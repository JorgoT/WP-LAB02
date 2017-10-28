import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StudentManagmentService} from './student-managment/student-managment.service';
import {AppComponent} from './app.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {RouterModule} from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {AddNewStudentComponent} from './add-new-student/add-new-student.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentListComponent,
    AddNewStudentComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([
      {
        path: 'details',
        component: StudentDetailsComponent
      },
      {
        path: 'list',
        component: StudentListComponent
      },
      {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full'
      },
      {
        path: 'details/:index',
        component: StudentDetailsComponent
      },
      {
        path: 'edit/:index',
        component: AddNewStudentComponent
      },
      {
        path: 'new',
        component: AddNewStudentComponent
      }
    ])
  ],
  providers: [StudentManagmentService],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
