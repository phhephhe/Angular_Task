import { Component, Input, OnInit } from '@angular/core';
import { CountryDataService } from '../country-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent{

  constructor(public CountryDataService : CountryDataService){}
  
  
}
