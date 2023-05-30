import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit{

  countryId! : string | number

  constructor(private _route:ActivatedRoute){}

  ngOnInit(): void {
    console.log(this._route.snapshot.params)
    this.countryId = this._route.snapshot.params['id']
  }

}
