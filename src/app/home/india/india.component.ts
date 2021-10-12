import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from 'src/app/country.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {
  indiaCases:any; 
  
  constructor(public service:CountryService) { }

  indiaMap:Map<string,string> = new Map();
  
  ngOnInit(): void {
    this.indiaMap.set("AN","Andaman and Nicobar Islands");
    this.indiaMap.set("AP","Andhra Pradesh");
    this.indiaMap.set("AR","Arunachal Pradesh");
    this.indiaMap.set("AS","Assam");
    this.indiaMap.set("BR","Bihar");
    this.indiaMap.set("CH","Chandigarh");
    this.indiaMap.set("CT","Chhattisgarh");
    this.indiaMap.set("DL","Delhi");
    this.indiaMap.set("DN","Dadra and Nagar Haveli and Daman and Diu");
    this.indiaMap.set("GA","Goa");
    this.indiaMap.set("GJ","Gujarat");
    this.indiaMap.set("HP","Himachal Pradesh");
    this.indiaMap.set("HR","Haryana");
    this.indiaMap.set("JH","Jharkhand");
    this.indiaMap.set("JK","Jammu and Kashmir");
    this.indiaMap.set("KA","Karnataka");
    this.indiaMap.set("KL","Kerala");
    this.indiaMap.set("LA","Ladakh");
    this.indiaMap.set("LD","Lakshadweep");
    this.indiaMap.set("MH","Maharashtra");
    this.indiaMap.set("ML","Meghalaya");
    this.indiaMap.set("MN","Manipur");
    this.indiaMap.set("MP","Madhya Pradesh");
    this.indiaMap.set("MZ","Mizoram");
    this.indiaMap.set("NL","Nagaland");
    this.indiaMap.set("OR","Odisha");
    this.indiaMap.set("PB","Punjab");
    this.indiaMap.set("PY","Puducherry");
    this.indiaMap.set("RJ","Rajasthan");
    this.indiaMap.set("SK","Sikkim");
    this.indiaMap.set("TG","Telangana");
    this.indiaMap.set("TN","Tamil Nadu");
    this.indiaMap.set("TR","Tripura");
    this.indiaMap.set("UP","Uttar Pradesh");
    this.indiaMap.set("UT","Uttarakhand");
    this.indiaMap.set("WB","West Bengal");
    this.indiaMap.set("TT","Total");
    
    this.service.getIndiaCases().subscribe(data=>{
      this.indiaCases = data;
    })    
  }
  
}
