import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { CountriesComponent } from 'src/app/home/dashboard/countries/countries.component';
import { SearchCountriesComponent } from 'src/app/home/dashboard/countries/search-countries/search-countries.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { InfectionsComponent } from 'src/app/home/dashboard/data/infections/infections.component';
import { CountryService } from './country.service';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { VaccinationComponent } from 'src/app/home/dashboard/data/vaccination/vaccination.component'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from 'src/app/home/dashboard/data/about/about.component';
import { WorldmapComponent } from './home/worldmap/worldmap.component';
import { IndiaComponent } from './home/india/india.component'
import { ShortNumberPipe } from 'src/short-pipe-number.pipe';
import { ContentComponent } from './home/content/content.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { CountryNavComponent } from './home/dashboard/country-nav/country-nav.component';
import { DataComponent } from './home/dashboard/data/data.component';
import { WrittenComponent } from './home/dashboard/written/written.component';
import { FooterComponent } from './home/footer/footer.component';

const appRoutes: Routes =
  [
    
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
      path: 'home', component: HomeComponent, children: [
        { path: 'india', component: IndiaComponent },
        { path: '', component: ContentComponent },
        { path: 'info', component: ContentComponent },
        { path: 'content', component: ContentComponent },
        { path: 'world', component: WorldmapComponent }
      ]
    },
    {
      path: 'countries', component: DashboardComponent, children: [
        {path: '', component: WrittenComponent},
        {
          path: ':countryName', component: DataComponent, children: [
            { path: '', component: AboutComponent },
            { path: 'about', component: AboutComponent },
            { path: 'cases', component: InfectionsComponent },
            { path: 'vaccination', component: VaccinationComponent }
            
          ]
        }
      ]
    }
    ]
    
@NgModule({
        declarations: [
          AppComponent,
          HeaderComponent,
          CountriesComponent,
          SearchCountriesComponent,
          DashboardComponent,
          InfectionsComponent,
          VaccinationComponent,
          HomeComponent,
          AboutComponent,
          WorldmapComponent,
          IndiaComponent,
          ShortNumberPipe,
          ContentComponent,
          NavbarComponent,
          CountryNavComponent,
          DataComponent,
          WrittenComponent,
          FooterComponent
        ],
        imports: [
          BrowserModule,
          AppRoutingModule,
          HttpClientModule,
          FormsModule,
          RouterModule.forRoot(appRoutes, {
            paramsInheritanceStrategy: 'always'
        })
        ],
        providers: [CountryService],
        bootstrap: [AppComponent]
      })
export class AppModule { }
