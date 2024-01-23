import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Homework } from '../homework';
import { HomeworkService } from 'src/app/homework.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {

   

  isActive(homeworkId: string): boolean {
    // Check if the current route matches the homework's route
    return this.route.snapshot.url[1]?.path === homeworkId;
  }
  homework: Homework = {
    _id : '',
    title: '',
    status: '',
    priority: '',
    dueDate: '',
    details: '',
  };

  homeworks: Homework[] = [];

  constructor(
    private homeworkService: HomeworkService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.homeworks = [];
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
       this.homeworkService.getHomeworks().subscribe((data: Object) => {
      this.homeworks = data as Homework[]; // Cast to Homework[]
      console.log(this.homeworks);
    });
    });

   
  }

  showNewHomework() {
    this.router.navigate(['/new-homework']);
  }
}
