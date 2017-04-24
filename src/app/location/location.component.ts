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

  fromInput($event:any){
      this.from = $event.target.value
  }
  toInput($event:any){
      this.to = $event.target.value
  }
  
  ngOnInit() {
  }

  search(){
    console.log(this.from,this.to)
  }
}
