import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './homepage/homepage.component';
import {ListComponent} from './list/list.component';
import {CountryDetailComponent} from './country-detail/country-detail.component';
import {LessonsComponent} from './list/lessons/lessons.component';
import {DetailLessonComponent} from './list/detail-lesson/detail-lesson.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { AuthorizationComponent } from './login/authorization/authorization.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        title: 'Home page'
    },
    {
        path: 'detail/:id',
        component: CountryDetailComponent,
        title: 'country detail'
    },
    {
        path: 'list',
        component: ListComponent,
        title: 'List page'
    },
    {
        path: 'list/lessons/:id',
        component: LessonsComponent,
        title: ' Lessons List page'
    }, {
        path: 'lesson/detail/:id',
        component: DetailLessonComponent,
        title: ' Lesson Detail page'
    },
    //login
    {
      path: 'login',
      component: LoginComponent,
      title: 'login',
      children: [
        {path:"login/registration", component:RegistrationComponent,title:"registration"},
        {path:"login/authorization", component:AuthorizationComponent,title:"authorization"},
      ]
  },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
