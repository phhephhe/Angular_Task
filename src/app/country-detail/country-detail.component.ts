import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryDataService } from '../country-data.service';
import { Country } from '../country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit{

  public countryId! : any
  public specificCountry: Country[] = []
  constructor(
    private _route:ActivatedRoute,
    private _countries:CountryDataService
    ){}

  ngOnInit(): void {
    console.log(this._route.snapshot.params['id'],'country id')
    this.countryId = this._route.snapshot.params['id'];
    console.log(this._countries.countries)

    this.specificCountry= this._countries.countries.filter(country => {
      return country.id == this.countryId
    })

      console.log(this.specificCountry[0],"გაფილტრული მასივი id - ის მიხედვით რომელშიც აუცილებლად არის 1 ობიექტი 0-ე ინდექსზე")
  }





}
