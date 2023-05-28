import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ListComponent } from './list/list.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, title: 'Home page' },
  { path: 'list', component: ListComponent, title: 'List page' },
  { path: 'quiz', component: QuizComponent, title: 'Quiz page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
