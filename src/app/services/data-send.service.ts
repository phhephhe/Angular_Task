import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSendService {
  
  public inputValueSubject: Subject<string> = new Subject<string>();

}