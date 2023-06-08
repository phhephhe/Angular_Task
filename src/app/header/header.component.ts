import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CountryDataService } from '../country-data.service';
import { Country } from '../country';
import { DataSendService } from '../data-send.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 

  inputValue: string = '';

  constructor(private dataSendService: DataSendService) {}

  sendData(): void {
    this.dataSendService.setInputValue(this.inputValue);
  }
}
