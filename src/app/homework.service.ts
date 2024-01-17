import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

 constructor(private webReqService: WebRequestService) { }

  createHomework(title: string, status: string, date: string, priority: string, details: string){
    return this.webReqService.post('homeworks', {title, status, date, priority, details  });
  }

  getHomeworks(){
    return this.webReqService.get('homeworks')
  }

  getHomeworkDetails(homeworkId: String){
    return this.webReqService.get(`homeworks/${homeworkId}`)
  }

}
