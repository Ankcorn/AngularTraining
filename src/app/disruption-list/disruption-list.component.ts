import { Component, OnInit, Inject } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TflService } from '../tfl.service'
@Component({
  selector: 'app-disruption-list',
  templateUrl: './disruption-list.component.html',
  styleUrls: ['./disruption-list.component.css'],
})

export class DisruptionListComponent implements OnInit {

  constructor(@Inject(TflService) private tfl) { 
    this.tfl.requestComplete$.subscribe((tflRouteData) => {
      console.log('Data request was made')
      this.disruptionList = tflRouteData

    })
  }
 
  disruptionList = [];
  
  ngOnInit() {

  }
}