import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewHomeworkComponent } from './new-homework/new-homework.component';
import { ListsComponent } from './lists/lists.component';


const routes: Routes = [
  {path: '', component: ListsComponent },
  {path: 'new-homework', component: NewHomeworkComponent },
  {path: 'homeworks/:homeworkId', component: ListsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
