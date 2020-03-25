import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar2chart',
  templateUrl: './bar2chart.component.html',
  styleUrls: ['./bar2chart.component.scss']
})
export class Bar2chartComponent implements OnInit {

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
    {data: [50, 40, 60], label: 'FE01', backgroundColor: 'green'},
    {data: [28, 80, 40], label: 'FE02', backgroundColor: 'lightpink'}
  ];

  public chartLabels: Array<any> = ['File Voucher', 'SQL', 'Web Portal'];

  public chartColors:Array<any> = [{
    backgroundColor:["tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato"]}
  ];

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
