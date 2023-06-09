import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSendService {
  private inputValueSubject: Subject<string> = new Subject<string>();

  setInputValue(value: string): void {
    this.inputValueSubject.next(value);
  }

  getInputValue(): Subject<string> {
    return this.inputValueSubject;
  }
}