import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  heading;
  data;
  sizeOfData;
  constructor(studentService: StudentService) {
    this.heading = studentService.getHeading();
    this.data = studentService.getData();
    this.sizeOfData = studentService.sizeOfData();
   }
  ngOnInit() {
  }
  canShow(){
    if(this.sizeOfData<0){
      return true;
    }else{
      return false;
    }
  }
}

