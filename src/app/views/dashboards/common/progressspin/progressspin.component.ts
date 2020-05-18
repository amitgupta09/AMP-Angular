import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressspin',
  templateUrl: './progressspin.component.html',
  styleUrls: ['./progressspin.component.scss']
})
export class ProgressspinComponent implements OnInit {
  color = 'primary';
  mode = 'determinate';
  value = 50;
  constructor() { }

  ngOnInit() {
  }

}
