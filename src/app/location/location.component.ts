import { Component, OnInit, Inject } from '@angular/core';

import { GeoService } from '../geo.service'
import { TflService } from '../tfl.service'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(@Inject(GeoService) private geo,@Inject(TflService) private tfl) { }
  from:string
  to:string

  searchButtonHTML = "Search";

  ngOnInit(){
  }

  fromInput($event:any){
      this.from = $event.target.value
  }
  toInput($event:any){
      this.to = $event.target.value
  }
  search(){
    this.searchButtonHTML = '<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>'; //Just a litle bit of sugar

    //Get the start and end locations then send them to the tfl api
    this.geoLocation(this.to,this.from,(tolocation,fromlocation)=>{
      //This is the body of the callback function
        this.tfl.getData(fromlocation,tolocation)
            this.searchButtonHTML = "Search";

    })
  }

  geoLocation(to:string,from:string,callback){
    //makes requests for both locations latitude and longitude and returns the results in an array
    this.geo.getLatLong(to,from).subscribe((result) =>{
      //Once complete pass to the callback
      callback(result[0],result[1])
    })

  }
}