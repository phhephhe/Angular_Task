import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';


// interface Data {
//   categories: Category[];
// }

@Injectable({
  providedIn: 'root'
})

export class DatafrombackService implements OnInit{

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }

  getData() : Observable<any> {
    return this._http.get<any>("http://localhost:8000/api");
  
  }

}
