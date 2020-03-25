import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  public datasets: any[] = [
    {
      data: [350, 450],
      backgroundColor: [
        "#FF6384"
      ],
      hoverBackgroundColor: [
        "#000",
        "#36A2EB",
        "#FFCE56"
      ]
    },{
      data: [250, 550],
      backgroundColor: [
        "#36A2EB"
      ],
      hoverBackgroundColor: [
        "#000",
        "#36A2EB",
        "#FFCE56"
      ]
    },{
      data: [450, 550],
      backgroundColor: [
        "#FFCE56"
      ],
      hoverBackgroundColor: [
        "#000",
        "#36A2EB",
        "#FFCE56"
      ]
    },{
      data: [650, 550],
      backgroundColor: [
        "#000"
      ],
      hoverBackgroundColor: [
        "#000",
        "#36A2EB",
        "#FFCE56"
      ]
    }];
  public labels:string[] = [];
  public colors: Array<{}> = [{}];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
