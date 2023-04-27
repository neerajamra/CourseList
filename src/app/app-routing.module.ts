import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExamcourseComponent } from './exam-course/exam-course.component';
import { AddNewCoursesComponent } from './add-new-courses/add-new-courses.component';
import { CourseEditComponent } from './course-edit/course-edit.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'exam-course',
    component:ExamcourseComponent
  },
  
  {
   path:'addNewCourse',
   component:AddNewCoursesComponent

  },
  {
    path:'courseedit/:id',
    component:CourseEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
