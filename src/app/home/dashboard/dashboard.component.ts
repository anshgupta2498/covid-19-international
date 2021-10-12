import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../country.model';
import { CountryService } from '../../country.service';
import { InfectionsComponent } from './data/infections/infections.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  countryName: any;
  imgAppear:boolean=true;
  countryImgLink:string = "";
  countryAbout:any;
  countryCases:any;
  countryVaccines:any;
  worldCases:any;
  indiaCases:any;

  rightMenu:boolean = false;
  about:boolean = false;
  cases: boolean = false;
  vaccination: boolean = false;
  worldMap:boolean = false;
  india:boolean = false;

  @Output() showHome = new EventEmitter();

  constructor(public service:CountryService) { }
  

  ngOnInit(): void {
    console.log("dash hello");
    this.service.setCountryName().subscribe((data)=>{
      this.countryName = data;
      this.countryAbout = null
      console.log(this.countryName);
      this.imgAppear = false;
      this.rightMenu = true;
      this.aboutClick();
      this.getCountryAbout();
      this.getCountryVaccine();
      this.getCountryCases();
    });
  }

  getCountryAbout(){
    this.service.getCountryAbout(this.countryName).subscribe(data=>{  
      this.countryAbout = data;
      console.log("ye niche about");
      this.countryImgLink = this.countryAbout[0].flags[0];
      console.log(this.countryAbout); 
    },
    error=>{
      this.countryAbout = null;
    }
    
  );}

  getCountryVaccine(){
    this.service.getCountryVaccine(this.countryName).subscribe(data=>{
      console.log("Ye niche vaccine");
      this.countryVaccines = Object.values(data.timeline)[0];
      console.log(this.countryVaccines);   
    });
  }


  getCountryCases(){
    this.service.getCountryCases(this.countryName).subscribe(data=>{
      console.log("Ye niche cases");
      this.countryCases = data;
      console.log(this.countryCases);   
    });
  }

  aboutClick() {
    this.about = true;
    this.cases = false;
    this.vaccination = false;
    this.worldMap = false;  
    this.india=false;
  }

  casesClick() {
    this.about = false;
    this.cases = true;
    this.vaccination = false;
    this.worldMap = false;
    this.india=false;
  }
  
  vaccinationClick() {
    this.about = false
    this.cases = false;
    this.vaccination = true;
    this.worldMap = false;
    this.india=false;
  }

  worldMapClick(){
    this.about = false
    this.cases = false;
    this.vaccination = false;
    this.worldMap = true;
    this.india=false;
  }
  
  indiaClick(){
    this.about = false
    this.cases = false;
    this.vaccination = false;
    this.worldMap = false;
    this.india = true;
  }
  
  homeClick(){
    this.showHome.emit();
  }
}
