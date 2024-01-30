import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Homework } from './homework';
import { Status } from './status.enum';
import { Priority } from './priority.enum';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

 constructor(private webReqService: WebRequestService) { }

  createHomework(title: string, status: Status, priority: Priority, dueDate: string,  details: string){
    return this.webReqService.post('homeworks', {title, status, priority, dueDate,  details  });
  }

  getHomeworks(){
    return this.webReqService.get('homeworks')
  }

  getHomeworkDetails(homeworkId: String){
    return this.webReqService.get(`homeworks/${homeworkId}`)
  }

}
