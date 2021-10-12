import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-nav',
  templateUrl: './country-nav.component.html',
  styleUrls: ['./country-nav.component.css']
})
export class CountryNavComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
}
