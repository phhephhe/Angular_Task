import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './homepage/homepage.component';
import { ListComponent } from './list/list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { LessonsComponent } from './list/lessons/lessons.component';
import { DetailLessonComponent } from './list/detail-lesson/detail-lesson.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home page' },
  { path: 'list', component: ListComponent, title: 'List page' },
  { path: 'list/lessons/:id', component: LessonsComponent, title: ' Lessons List page' },
  { path: 'lesson/detail/:id', component: DetailLessonComponent, title: ' Lesson Detail page' },


  {
    path: 'detail/:id',
    component: CountryDetailComponent,
    title: 'country detail',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
