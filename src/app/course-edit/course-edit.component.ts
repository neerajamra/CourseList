import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import{FormGroup,FormControl} from '@angular/forms';
import { AddcourseService } from '../services/addcourse.service';
import{ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {

  public Editor = ClassicEditor;

constructor(public Course:AddcourseService,private router:ActivatedRoute){}


editCourse1 = new FormGroup(
  { examCourse:new FormControl(''),
   price: new FormControl(''),
   discription:new FormControl(''),
   discrip:new FormControl(''),
});


message:boolean=false;
  ngOnInit(): void {
  //  console.log(this.router.snapshot.params.[])
  }

  editCourse(){      
    let requestBody={
      ...this.editCourse1.value,
      id:'',
      
    }
     console.log( requestBody);
    this.Course.saveExamData(requestBody).subscribe((data)=>{
      // console.log(data)
      this.message=true;
      this.editCourse1.reset({});  //this is for clear the imput field
     })
     
  }
  
  
}
