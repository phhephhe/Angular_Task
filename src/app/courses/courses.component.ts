import { Component, OnInit } from '@angular/core';
import { DatafrombackService } from '../services/datafromback.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
// ობზერვებელ ცარიელ ცვლადი სადაც ვინახავთ კურსების
// კატეგორიების ლისტს 
  CoursesCategories$! : Observable <any>

  constructor(private DatafrombackService : DatafrombackService){}

  ngOnInit(): void {
    // კომპონენტის ჩატვირთვისთანავე ვიძახებთ სერვისში აღწერილ კურსების კატეგორიების
    // ფუნქციას რომელიც წამოიღებს ლისტს და შეინახავს CoursesCategories$ ცვლადში
    this.CoursesCategories$ = this.DatafrombackService.getCourseCategories()


    

  }

}
