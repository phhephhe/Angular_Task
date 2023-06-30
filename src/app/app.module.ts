import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './homepage/homepage.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LessonsComponent } from './list/lessons/lessons.component';
import { DetailLessonComponent } from './list/detail-lesson/detail-lesson.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { AuthorizationComponent } from './login/authorization/authorization.component';
import { ProfileComponent } from './profile/profile.component';
import { InterceptorInterceptor } from './interceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ListComponent,
    CardComponent,
    CountryDetailComponent,
    LessonsComponent,
    DetailLessonComponent,
    LoginComponent,
    RegistrationComponent,
    AuthorizationComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
