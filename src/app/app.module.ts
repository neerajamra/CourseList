import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewCoursesComponent } from './add-new-courses/add-new-courses.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ExamcourseComponent } from './exam-course/exam-course.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations' ;
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [
    AppComponent,
    AddNewCoursesComponent,
    CourseEditComponent,
    HeaderComponent,
    HomeComponent,
    SideNavComponent,
    ExamcourseComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CKEditorModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
