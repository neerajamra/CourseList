import { Component, OnInit } from '@angular/core';
import { AddcourseService } from '../services/addcourse.service';

@Component({
  selector: 'app-exam-course',
  templateUrl: './exam-course.component.html',
  styleUrls: ['./exam-course.component.scss']
})
export class ExamcourseComponent implements OnInit {

  
  constructor(private course:AddcourseService){}

  examList: any=[];

  ngOnInit():void {

    this.course.addCourse().subscribe((data: any) => {
      
      // console.log(this.course)
      this.examList=data
      })
  


}

deleteCourse(course_id:any){
  console.log(course_id)
this.course.deleteCourse(course_id).subscribe((data)=>{
 // console.log(data)

//  this is use for refresh the page
this.ngOnInit();

})
}

}

