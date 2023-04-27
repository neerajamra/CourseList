import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import { AddcourseService } from '../services/addcourse.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-new-courses',
  templateUrl: './add-new-courses.component.html',
  styleUrls: ['./add-new-courses.component.scss']
})
export class AddNewCoursesComponent implements OnInit {
  public Editor = ClassicEditor;
 
  constructor(private Course:AddcourseService){}

  addCourse1 = new FormGroup(
    { examCourse:new FormControl(''),
     price: new FormControl(''),
     discription:new FormControl(''),
     discrip:new FormControl(''),
 });
   
 message:boolean=false;    //this is for add course success msg
  ngOnInit(): void {
   
  }

  saveCourse(){      
    let requestBody={
      ...this.addCourse1.value,
      id:'',
      
    }
     console.log( requestBody);
    this.Course.saveExamData(requestBody).subscribe((data)=>{
      // console.log(data)
      this.message=true;
      this.addCourse1.reset({});  //this is for clear the imput field
     })
     
  }
  

}


