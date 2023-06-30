import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RegistrationService {

    constructor(private _http : HttpClient) {}

    registration(formData : any): Observable < any > {
        return this._http.post<any>("http://localhost:8000/api/registration", formData).pipe(tap(res => {
            console.log(res, 'რეგისტრირებული მომხმარებელი')
        }));
    }


    login(userData : any): Observable < any > {
        return this._http.post<any>("http://localhost:8000/api/login", userData).pipe(tap(res => {
            localStorage.setItem('user', JSON.stringify(res))
        }))
    }

    getToken() {
        const user = JSON.parse(localStorage.getItem('user')!)
        return user.token
    }

    getProfile(): Observable < any > {
        return this._http.get("http://localhost:8000/api/user")
    }
  //   , {
  //     headers: new HttpHeaders(
  //         {"x-auth-token": this.getToken()}
  //     )
  // }
}
