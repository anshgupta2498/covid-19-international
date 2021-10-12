import { CountryInfo } from "./country-info.model";

export class Country {
    constructor(public updated: number, public country: string, public countryInfo: CountryInfo,
        public cases:number,public todayCases:number,public deaths:number,public todayDeaths:number,
        public recovered:number,public todayRecovered:number,public active:number,public critical:number,public casesPerOneMillion:number,
        public deathsPerOneMillion:number,public tests:number,public testsPerOneMillion:number,public population:number,public continent:number,public oneCasePerPeople:number,
        public oneDeathPerPeople:number,public oneTestPerPeople:number,public activePerOneMillion:number,public recoveredPerOneMillion:number,public criticalPerOneMillion:number,) { }
}

