import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { Country } from 'src/app/country.model';
import { CountryService } from 'src/app/country.service';


@Component({
  selector: 'app-search-countries',
  templateUrl: './search-countries.component.html',
  styleUrls: ['./search-countries.component.css']
})
export class SearchCountriesComponent implements OnInit{

  constructor(public service:CountryService) { }
  countries:Country[]= [];
  search:string = "";
  isEmpty:boolean = false;
  @Output() event = new EventEmitter<Country[]>();
  
  sendString(){
    this.event.emit(this.filteredCountries);
  }

  filteredCountries:Country[] = this.countries;
    ngOnInit(): void {
    this.getCountries();    
    
  }

  searchCountries(){
      if(this.search !==""){
        this.filteredCountries = this.countries.filter(data=>{
          return data.country.toLowerCase().startsWith(this.search.trim().toLowerCase());
        });
      }
      else{
        console.log("Hello");
        this.filteredCountries = this.countries;
      }
      if(this.filteredCountries.length === 0){
        this.isEmpty = true;
      }
      else{
        this.isEmpty = false;
      }
      this.sendString();
    }
    
  
  getCountries(){
      this.service.getCountriesData().subscribe((data)=>{
      this.countries = data;
      this.filteredCountries = this.countries;
      this.sendString();
    });
  }
}
