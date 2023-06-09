import { Component, OnInit } from '@angular/core';
import { DatafrombackService } from '../services/datafromback.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{

  fakeData$! : Observable <any>

  constructor(private fakeData : DatafrombackService){}

  ngOnInit(): void {
    this.fakeData$ = this.fakeData.getDataFake()
    this.fakeData$.subscribe(res => {
      console.log(res)
    })
  }

}
