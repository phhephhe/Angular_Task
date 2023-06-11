import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';

interface Data {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class DatafrombackService implements OnInit {
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {}

  getData(): Observable<any> {
    return this._http.get<any>('http://localhost:8000/api');
  }

  getDataFake(): Observable<any> {
    return this._http.get<any>(
      'https://jsonplaceholder.typicode.com/posts/1/comments'
    );
  }

// ///////////////////////////// Task
//მოგვაქვს კორსების კატეგორიების ლისტი
  getCourseCategories() : Observable<any>{
    return this._http.get('categoires-end-point')
  }
// მოგვაქვს კურსის გაკვეთილების ლისტი 
//id - ის მიხედვით რომელსაც ამ ფუნქციის გამოძახებისას
//გადავცემთ არგუმენტად 
  getCourseLessons(id : string | number) : Observable<any>{
    return this._http.get(`courses-end-point-and${id}`)
  }


}
