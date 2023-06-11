import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './homepage/homepage.component';
import { ListComponent } from './list/list.component';
import { CoursesComponent } from './courses/courses.component';
import { CardComponent } from './card/card.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseLessonsComponent } from './courses/course-lessons/course-lessons.component';
import { CategoryCardtComponent } from './courses/category-card/category-card.component';
import { LessonCardComponent } from './courses/course-lessons/lesson-card/lesson-card.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ListComponent,
    CoursesComponent,
    CardComponent,
    CountryDetailComponent,
    CourseLessonsComponent,
    CategoryCardtComponent,
    LessonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
