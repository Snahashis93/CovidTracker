import { Component, OnInit,ViewChild } from '@angular/core';
import { CoronaService } from '../shared/corona.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip
} from "ng-apexcharts";


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class CovidChartComponent implements OnInit {
  responseData:any;
  public seriesDailyConfirmed: ApexAxisChartSeries;
  public seriesDailyDeceased: ApexAxisChartSeries;
  public seriesDailyRecovered: ApexAxisChartSeries;
  public seriesTotalConfirmed: ApexAxisChartSeries;
  public seriesTotalDeceased: ApexAxisChartSeries;
  public seriesTotalRecovered: ApexAxisChartSeries;
  

  public chart: ApexChart;
  public dataLabels: ApexDataLabels;
  public markers: ApexMarkers;
  public title: ApexTitleSubtitle;
  public fill: ApexFill;
  public yaxis: ApexYAxis;
  public xaxis: ApexXAxis;
  public tooltip: ApexTooltip;

  constructor(private cs: CoronaService) {
    this.cs.getData().subscribe((data)=>{
      this.responseData=data;
      this.initChartData();
    })
    
  }
  public initChartData(): void {
    var x = new Date("30 Jan 2020").getTime();
    let datesDailyConfirmed = [];
    let datesDailyDeceased = [];
    let datesDailyRecovered = [];
    let datesTotalConfirmed = [];
    let datesTotalDeceased = [];
    let datesTotalRecovered = [];
    for (let i = 0; i < this.responseData.cases_time_series.length; i++) {
      x = x + 86400000;
      
      datesDailyConfirmed.push([x, this.responseData.cases_time_series[i].dailyconfirmed]);
      datesDailyDeceased.push([x, this.responseData.cases_time_series[i].dailydeceased]);
      datesDailyRecovered.push([x, this.responseData.cases_time_series[i].dailyrecovered]);
      datesTotalConfirmed.push([x, this.responseData.cases_time_series[i].totalconfirmed]);
      datesTotalDeceased.push([x, this.responseData.cases_time_series[i].totaldeceased]);
      datesTotalRecovered.push([x, this.responseData.cases_time_series[i].totalrecovered]);
    }

    this.seriesDailyConfirmed = [
      {
        name: "Daily Confirmed",
        data: datesDailyConfirmed
      }
    ];
    this.seriesDailyDeceased = [
      {
        name: "Daily Deceased",
        data: datesDailyDeceased
      }
    ];
    this.seriesDailyRecovered = [
      {
        name: "Daily Recovered",
        data: datesDailyRecovered
      }
    ];
    this.seriesTotalConfirmed = [
      {
        name: "Total Confirmed",
        data: datesTotalConfirmed
      }
    ];
    this.seriesTotalDeceased = [
      {
        name: "Total Deceased",
        data: datesTotalDeceased
      }
    ];
    this.seriesTotalRecovered = [
      {
        name: "Total Recovered",
        data: datesTotalRecovered
      }
    ];
    
    this.chart = {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
              autoSelected: "zoom"
      }
    };
    this.dataLabels = {
      enabled: false
    };
    this.markers = {
      size: 0
    };
    this.title = {
      text: "Covid tracker",
      align: "center"
    };
    this.fill = {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    };
    this.yaxis = {
     
      title: {
        text: "Count"
      }
    };
    this.xaxis = {
      type: "datetime"
    };
    this.tooltip = {
      shared: false,
      
    };
  }
  ngOnInit(): void {
  }

}
