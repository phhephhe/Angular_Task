import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit{
  form! : FormGroup;

  constructor(private _http:RegistrationService, private _fb : FormBuilder){

  }

  ngOnInit(): void {
    this.form = this._fb.group({
      email : [null, [Validators.required]],
      password : [null, [Validators.required]]
    })
  }

  submit(){
    this._http.login(this.form.value).subscribe(
      res => console.log(res),
      err => console.log(err.error)
    )
  }

}
