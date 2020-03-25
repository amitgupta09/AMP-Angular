import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})

export class BarchartComponent implements OnInit {
  appArray = [];
  errorCountArray = [];
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
       {
           display: true,
           ticks: {
            fontColor : 'black' 
           }
       }
     ]
   }
  };
  barChartLabels: Label[] =  this.appArray;
  barChartType: ChartType = 'bar';
  barChartLegend: any = {
    legend : {
        labels : {
          fontColor : 'red'  
        }
    }
};
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.errorCountArray, label: 'Error Count', backgroundColor: 'green' }
  ];

  chartColors: any[] = [
    { 
      backgroundColor:["tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato"]
    
    }];

  constructor(private http:HttpClient) {
    
  }

  ngOnInit() {
    console.log("hi..");
    var url = "https://localhost:44347/api/values";
    this.http.get(url).subscribe((response) => {
     console.log(response);
     console.log("h");
     response.forEach(r => {
      this.appArray.push(r.computerName);
      this.errorCountArray.push(r.errorCount);
    } )   

    console.log(this.appArray);
    }, (error) => {console.log(error);})
  }
    
  }