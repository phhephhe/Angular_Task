import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  form!: FormGroup;
  constructor(private _fb: FormBuilder,
    private _registration: RegistrationService,
    ){

  }

  ngOnInit(): void {
    this.form = this._fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.minLength(9),Validators.maxLength(9)]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })

    
  }

 
register(){
  console.log(this.form.value)
  this._registration.registration(this.form.value).subscribe(
    res => console.log(res),
    err => console.log(err.error,'error message')
  )
}


}
