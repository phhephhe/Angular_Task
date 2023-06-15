import { Component, OnInit } from '@angular/core';
import { DatafrombackService } from '../services/datafromback.service';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  public data$! : Observable<Category[]>


  constructor(private _dataFromBack : DatafrombackService){}

  ngOnInit(): void {
    this.data$ = this._dataFromBack.getData();
  }
  
}
