import { getLocaleFirstDayOfWeek } from '@angular/common';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators'
import { Country } from 'src/app/country.model';
import { CountryService } from 'src/app/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  constructor(private router:Router,public service:CountryService,private route:ActivatedRoute) { }
  filteredCountries: Country[] = [];
  ngOnInit(): void {
  }
  getFilteredCountries(countries: Country[]) {
    this.filteredCountries = countries;
  }
  countryClicked(event: any){
    this.service.receiveCountry(event.target.innerText);
  }
}
