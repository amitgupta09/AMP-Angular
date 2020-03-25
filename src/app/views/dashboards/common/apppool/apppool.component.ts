import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-apppool',
  templateUrl: './apppool.component.html',
  styleUrls: ['./apppool.component.css']
})

export class ApppoolComponent implements OnInit {
  appArray = [];
  appdata = [];
  poolDetails;
  backColor;
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
       {
           display: true,          
           ticks: {
            display : false 
           }
       }
     ]
   }
  };
  barChartLabels: Label[] =  this.appArray;
  barChartType: ChartType = 'bar';
  barChartLegend: any = {
    legend : true
};
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { 
      data: this.appdata,
    label: "Started"},
    { 
      data: [0,0,0,0,0,0,0,0,0],
      label: "Stopped",
      backgroundColor: 'tomato'
    }
  ];

  chartColors: any[] = [
    { 
      backgroundColor:["blue", "red", "green", "yellow", "grey", "cyan", "brown", "black", "rgba(225,10,24,0.2)"]
    
    }];

  constructor(private http:HttpClient) {
    
  }

  ngOnInit() {
    console.log("hi");
    var url = "https://localhost:44347/api/values/api";
    this.http.get(url).subscribe((response) => {
     console.log(response);
     console.log("herrr");
     this.poolDetails = response;
     response.forEach(r => {
      this.appArray.push(r.poolName);
      this.appdata.push(100);  
    } )   
    
    for (let index = 0; index < this.poolDetails.length; index++) {
      if (this.poolDetails[index].poolState == "Started") {
        this.chartColors[0].backgroundColor[index] = 'forestgreen';
      } else {
        this.chartColors[0].backgroundColor[index] = 'tomato';
      }
    }
    console.log(this.appArray);
    }, (error) => {console.log(error);})
    
  }
}