import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Country } from './country.model';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  constructor(private http: HttpClient) { }
  public countryName = new Subject<string>();
  public myObservable$ = this.countryName.asObservable() //Has a $ 
  
  // GET COUNTRY DATA
  getCountryAbout(name:string){
    return this.http.get(`https://restcountries.com/v3/name/${name}`);
  }
  getCountryVaccine(name:string){
    return this.http.get<any>(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${name}?lastdays=1`);
  }
  getCountryCases(cName:string){
    var url = `https://corona.lmao.ninja/v2/countries/${cName}?yesterday=true&strict=true&query`;
    return this.http.get<any>(url);
  }

  //Country List
  getCountriesData(): Observable<any> {
    return this.http.get<any>('https://corona.lmao.ninja/v2/countries?yesterday&sort');
  }
  
  // World Cases
  getWorldCases(){
    return this.http.get<any>('https://disease.sh/v3/covid-19/all');
  }

  // India Cases
  getIndiaCases(){
    return this.http.get<any>('https://data.covid19india.org/v4/min/data.min.json');
  }

  // UPDATE AND SEND COUNTRIES
  receiveCountry(s:string){
    this.countryName.next(s);
  }
  setCountryName(){
    return this.myObservable$;
  }
}
