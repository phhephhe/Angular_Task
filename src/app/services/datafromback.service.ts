import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';



@Injectable({
  providedIn: 'root',
})
export class DatafrombackService implements OnInit {
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {}

  // კატეგორიები
  getData(): Observable<Category[]> {
    return this._http.get<Category[]>('http://localhost:8000/api/categories');
  }
// გაკვეთილები
getLessons(categoryId: string | number):Observable<any[]>{
  return this._http.get<any[]>(`http://localhost:8000/api/courses/${categoryId}`)
}
// გაკვეთილი დეტალური
getDetailLesson(lessonId : string | number) : Observable<any>{
return this._http.get<any>(`http://localhost:8000/api/courses/detail/${lessonId}`)
}

// // ///////////////////////////// Task
// //მოგვაქვს კორსების კატეგორიების ლისტი
//   getCourseCategories() : Observable<any>{
//     return this._http.get('categoires-end-point')
//   }
// // მოგვაქვს კურსის გაკვეთილების ლისტი 
// //id - ის მიხედვით რომელსაც ამ ფუნქციის გამოძახებისას
// //გადავცემთ არგუმენტად 
//   getCourseLessons(id : string | number) : Observable<any>{
//     return this._http.get(`courses-end-point-and${id}`)
//   }


}
