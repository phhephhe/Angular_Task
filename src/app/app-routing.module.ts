import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './homepage/homepage.component';
import { ListComponent } from './list/list.component';
import { CoursesComponent } from './courses/courses.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CourseLessonsComponent } from './courses/course-lessons/course-lessons.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home page' },
  { path: 'list', component: ListComponent, title: 'List page' },
  { path: 'Categories', component: CoursesComponent, title: 'Categories page' },
  {
    path: 'CourseCategories/:courseId',
    component: CourseLessonsComponent,
    title: 'გაკვეთილების ლისტი',
  },

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
export class AppRoutingModule {}
