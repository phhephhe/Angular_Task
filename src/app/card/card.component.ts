import { Component, Input } from '@angular/core';
import { Country } from '../interfaces/country';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() countries! : Country


}
