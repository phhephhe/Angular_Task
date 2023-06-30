import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  constructor(private register: RegistrationService){}

  profile$! : Observable<any> 

  ngOnInit(): void {
    this.profile$ = this.register.getProfile()
  }

}
