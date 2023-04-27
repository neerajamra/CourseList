import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AddcourseService {
  
   apiUrl="https://6447e3c57bb84f5a3e4c522d.mockapi.io/api/ExamCat"
  constructor(private http:HttpClient) { }


  // for render or listing of course
  addCourse() {
    return this.http.get(`${this.apiUrl}`);
  }

  //this is for post the data
saveExamData(data:any){
  console.log(data)
  
  //  return this.http.post(`${this.apiUrl}`)
 
return this.http.post(`${this.apiUrl}`,data)
}

// this is for delete the data

deleteCourse(id:any){
  return this.http.delete(`${this.apiUrl}/${id}`)
}

}
