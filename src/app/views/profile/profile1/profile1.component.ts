import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.component.html',
  styleUrls: ['./profile1.component.scss']
})
export class Profile1Component implements OnInit {
  applicationname = 'Application'
  eventlevel = 'Error'
  constructor(private route:ActivatedRoute) { }
   download:any;
  ngOnInit() {
     this.download = this.route.snapshot.params['foo'];
  }


}
