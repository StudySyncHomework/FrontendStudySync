import { Component } from '@angular/core';
import { HomeworkService } from 'src/app/homework.service';
import { Router } from '@angular/router';
import { Homework } from '../homework';
import { Status } from '../status.enum';
import { Priority } from '../priority.enum';

@Component({
  selector: 'app-new-homework',
  templateUrl: './new-homework.component.html',
  styleUrls: ['./new-homework.component.css']
})
export class NewHomeworkComponent {
   homework = {
    title: '',
    status: Status.Research,
    priority: Priority.Low,
    dueDate: '',
    details: ''
  };

  constructor (private homeworkService: HomeworkService, private router: Router){}
  
  createNewHomework(){
    this.homeworkService.createHomework(this.homework.title,this.homework.status,this.homework.priority,this.homework.dueDate,this.homework.details).subscribe((response: any)=>{
      console.log(response)
    })
  }
  goBack() {
    this.router.navigate(['/lists']);
  }

}
