import { Component, OnInit } from '@angular/core';
import { DatafrombackService } from '../services/datafromback.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  public data$! : Observable<any>

  constructor(private _dataFromBack : DatafrombackService){}

  ngOnInit(): void {
    this.data$ = this._dataFromBack.getData();
    this.data$.subscribe(res => {
      console.log(res); 
    });
  }
  

}
