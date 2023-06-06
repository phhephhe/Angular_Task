import { Injectable } from '@angular/core';
import { Country } from './country';

@Injectable({
  providedIn: 'root',
})
export class CountryDataService {
  constructor() {}

  
  public countries: Country[] = [
    {
      id:1,
      name: 'Nicaragua',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyCD31kghF-7JRZuiluTMumGvpQMyEqf7Aw&usqp=CAU',
      about:
        'Nicaragua, set between the Pacific Ocean and the Caribbean Sea, is a Central ',
    },
    {
      id:2,
      name: 'Zimbambwe',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOslbdQAj2wyQMAL214YCUoLtF_sFdEMcQ_A&usqp=CAU',
      about:
        'Zimbabwe is a landlocked country in southern Africa known for its dramatic landscape and diverse wildlife, much of it within parks, reserves and safari areas.',
    },
    {
      id:3,
      name: 'Indonesia',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF_YJ4aoIc6kWOe37kcOWqTGev0hOJtAtU_Q&usqp=CAU',
      about:
        'Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans.',
    },
    {
      id:4,
      name: 'Ethiopia',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjhHHcolVPq4krbU-uaDL4WQLopigblCgnw&usqp=CAU',
      about:
        'Ethiopia, in the Horn of Africa, is a rugged, landlocked country split by the Great Rift Valley. ',
    },
    {
      id:5,
      name: 'Estonia',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiEYnxHufcwCEnbUn3PCTfs_q9znHT01n0g&usqp=CAU',
      about:
        'Estonia, a country in Northern Europe, borders the Baltic Sea and Gulf of Finland. ',
    },
    {
      id: 6,
      name: 'Andora',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREU2xrpn2b0UjQEEidMlINTlQPmk1HvrdM8g&usqp=CAU',
      about:
        'Andorra is a tiny, independent principality situated between France and Spain in the Pyrenees mountains',
    },
  ];
  

}
