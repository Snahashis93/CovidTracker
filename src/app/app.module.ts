import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CoronaService } from './shared/corona.service';
import { DistrictComponent } from './district/district.component';
import { HelpfulLinksComponent } from './helpful-links/helpful-links.component';
import { FAQComponent } from './faq/faq.component';
import { CovidChartComponent } from './chart/chart.component';
import{ NgApexchartsModule}from "ng-apexcharts"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DistrictComponent,
    HelpfulLinksComponent,
    FAQComponent,
    CovidChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers: [CoronaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
    