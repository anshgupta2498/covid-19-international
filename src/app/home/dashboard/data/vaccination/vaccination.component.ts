import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/country.service';

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.css']
})
export class VaccinationComponent implements OnInit {

  constructor(public service: CountryService, public route: ActivatedRoute) { }
  countryVaccines: any;
  countryVaccinesCheck: boolean = false;
  countryName: any;
  notFound:boolean = true;
  ngOnInit(): void {
    this.route.params.subscribe(data => {
      console.log(data);
      this.countryName = data.countryName;
      this.service.getCountryVaccine(this.countryName).subscribe(data => {
        this.countryVaccines = Object.values(data.timeline)[0];
        this.countryVaccinesCheck = true;
      },
      error=>{
        this.countryVaccinesCheck = true;
        this.notFound = false;
      })
    })
  }
}
