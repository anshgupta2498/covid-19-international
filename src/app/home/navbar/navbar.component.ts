import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountryService } from 'src/app/country.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
