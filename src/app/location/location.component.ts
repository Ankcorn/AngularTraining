import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  from:string
  to:string

  constructor() { }

  ngOnInit() {
  }

  search(){
    console.log(this.from,this.to)
  }
}
