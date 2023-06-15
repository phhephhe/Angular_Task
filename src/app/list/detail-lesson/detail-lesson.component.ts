import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap, tap } from 'rxjs';
import { DatafrombackService } from 'src/app/services/datafromback.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-lesson',
  templateUrl: './detail-lesson.component.html',
  styleUrls: ['./detail-lesson.component.css']
})
export class DetailLessonComponent implements OnInit{
lessonId! : number | string;
detailLesson$! :Observable  <any>;
constructor(private _http:DatafrombackService,
  private _route : ActivatedRoute,
  private sanitizer: DomSanitizer

  ){}

  ngOnInit(): void {
    this.lessonId = this._route.snapshot.params['id']
    this.detailLesson$ = this._http.getDetailLesson(this.lessonId).pipe(
      switchMap(
        detailLesson => {
          return this._http.getLessons(detailLesson.data['category']).pipe(
            map(lessonsdetails => {
              return {
                ...detailLesson,
                similarCourses: lessonsdetails
              }
            }),
            tap(data => console.log(data))
          )
        }
      )
    )
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${url}`);
  }
  

}
