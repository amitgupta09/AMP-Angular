import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubblechart',
  templateUrl: './bubblechart.component.html',
  styleUrls: ['./bubblechart.component.scss']
})
export class BubblechartComponent implements OnInit {

  appArray = [];
  errorCountArray = [];
  public map: any = { lat: 51.678418, lng: 7.809007 };
  public chart1Type:string = 'bar';
  public chart2Type:string = 'pie';
  public chart3Type:string = 'line';
  public chart4Type:string = 'radar';
  public chart5Type:string = 'doughnut';


  public chartType = 'line';

  public chartDatasets: Array<any> = [
    {data: [60, 50, 40, 35, 25, 20, 15, 10, 4], label: 'Reuqests Count:'}
  ];

  public chartLabels: Array<any> = ['TH', 'SA', 'SW', 'NZ', 'MY', 'DK', 'AU', 'US', 'UK'];

  public chartColors:Array<any> = [{
    backgroundColor:["tomato", "lightpink", "lightgrey", "lightgreen", "lightyellow", "brown", "lightblue", "lightorange", "pink"]
  }];

  public dateOptionsSelect: any[];
  public bulkOptionsSelect: any[];
  public showOnlyOptionsSelect: any[];
  public filterOptionsSelect: any[];

  public chartOptions: any = {
    responsive: true,
    legend: {
      labels: {
        fontColor: '#5b5f62',
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: '#5b5f62',
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: '#5b5f62',
        }
      }]
    }
  };

  constructor() {
    
  }
  ngOnInit() {
    
  }
}
