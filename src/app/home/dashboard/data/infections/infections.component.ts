import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';
import { observeOn } from 'rxjs/operators';
import { Country } from 'src/app/country.model';
import { CountryService } from 'src/app/country.service';

@Component({
  selector: 'app-infections',
  templateUrl: './infections.component.html',
  styleUrls: ['./infections.component.css']
})
export class InfectionsComponent implements OnInit {

  constructor(public service:CountryService, public route:ActivatedRoute) { }
  countryCases:any;
  countryCasesCheck:boolean = false;
  countryData:any;
  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      console.log(data);
      this.countryData = data;
      this.service.getCountryCases(this.countryData.countryName).subscribe(data=>{
        this.countryCases = data;
        this.countryCasesCheck = true;
    })
    })
  }
  }

