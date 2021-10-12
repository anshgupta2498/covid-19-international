import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from 'src/app/country.service';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css']
})
export class WorldmapComponent implements OnInit {
  worldCases:any;
  constructor(public service: CountryService) { }

  ngOnInit(): void {
    this.service.getWorldCases().subscribe(data=>{
      this.worldCases = data;
    })
  }

}
