import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewHomeworkComponent } from './new-homework/new-homework.component';
import { ListsComponent } from './lists/lists.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
   {path: '', component: ListsComponent  },
  {path: 'new-homework', component: NewHomeworkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
