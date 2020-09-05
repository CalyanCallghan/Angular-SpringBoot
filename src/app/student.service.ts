import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  size:number;
  students:StudentInformation[]=[{name:'kalyan',course:'java',institiue:'Naresh IT','emailId':'cal@icloud.com'},
                                 {name:'Chaitanya',course:'Phyton',institiue:'Satyam IT','emailId':'chaitanya@icloud.com'},
                                 {name:'Jarvis',course:'AI',institiue:'Durga Soft','emailId':'jarvis@icloud.com'}];
  getHeading(){
    return ['Name','Course','Institute','EmailId'];
  }
  getData(){
    return this.students;
  }
  sizeOfData(){
    this.size = this.students.length; 
    return this.size;
  }
}
class StudentInformation {  
  name : string;  
  course : string;  
  institiue : string;  
  emailId : string;  
} 
