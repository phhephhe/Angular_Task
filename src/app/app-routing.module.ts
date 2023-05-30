import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ListComponent } from './list/list.component';
import { QuizComponent } from './quiz/quiz.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, title: 'Home page' },
  { path: 'list', component: ListComponent, title: 'List page' },
  { path: 'quiz', component: QuizComponent, title: 'Quiz page' },
  { path: 'details/:id', component: CountryDetailComponent, title: 'Details of Country' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
