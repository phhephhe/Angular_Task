import { Component, Input, OnInit } from '@angular/core';
import { CountryDataService } from '../country-data.service';
import { FormControl } from '@angular/forms';
import { Country } from '../country';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  public search : FormControl = new FormControl()
  public filteredCountry : Country[] = []
 
 
  constructor(public _CountryDataService: CountryDataService){}
 
   ngOnInit(): void {
 
       this.search.valueChanges.subscribe(text => {
         this.filteredCountry = this._CountryDataService.countries.filter(country => {
           return text == country.name
         })
         
       })
 
   }
 


}
