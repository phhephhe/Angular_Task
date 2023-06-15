import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DatafrombackService } from 'src/app/services/datafromback.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit{

constructor(private _route:ActivatedRoute,
  private _DatafrombackService: DatafrombackService
  ){}

categoryId! : string | number;
lessonsList$! : Observable<any[]>
  ngOnInit(): void {
    this.categoryId = this._route.snapshot.params['id']
    this.lessonsList$ =  this._DatafrombackService.getLessons(this.categoryId)
  }



}
