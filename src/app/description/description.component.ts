import { Component } from '@angular/core';
import { Homework } from '../homework';
import { Params } from '@angular/router';
import { HomeworkService } from '../homework.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent {
  homework: Homework = {
    title: '',
    status: '',
    priority: '',
    dueDate: '',
    details: '',
  };

  constructor(
    private homeworkService: HomeworkService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.homeworkService
        .getHomeworkDetails(params['homeworkId'])
        .subscribe((homework: any) => {
          this.homework = homework;
          console.log(this.homework);
        });
    });
  }
}
