import { Component, OnInit } from '@angular/core';
import { DataSendService } from '../data-send.service';
import { CountryDataService } from '../country-data.service';
import { Country } from '../country';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {
  inputValue: string = '';
  filteredCountries: Country[] = [];

  constructor(
    private dataSendService: DataSendService,
    public countryDataService: CountryDataService
  ) {}

  ngOnInit(): void {
    this.dataSendService.getInputValue().subscribe(value => {
      this.inputValue = value;
      this.filterCountries();
    });
  }

  filterCountries(): void {
    this.filteredCountries = this.countryDataService.countries.filter(country =>
      country.name.toLowerCase().includes(this.inputValue.toLowerCase())
    );
  }
}
