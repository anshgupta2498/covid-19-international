import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from 'src/app/country.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  countryAbout:any;
  countryData:any;
  notFound=true;
  constructor(public service:CountryService, public route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Hi");
    
    this.route.params.subscribe(data=>{
      console.log(data);
      this.countryData = data;
      this.service.getCountryAbout(this.countryData.countryName).subscribe(data=>{
        this.countryAbout = data;
    },
    error=>{
      this.countryAbout = true;
      this.notFound = false;
    })
    })
  }
}
