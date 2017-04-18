import { Injectable } from '@angular/core';

import { Http, Response }          from '@angular/http'; //Standard Http libraries that are part of Angular

import { Observable } from 'rxjs/Observable'; //An API for asynchronous programming with observable streams
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TflService {
 
  //The tfl Api endpoint
  Base_URL:string = 'https://api.tfl.gov.uk/Journey/JourneyResults/'

  //Construct a private instance of the Http class
  constructor(private http:Http) { }


  //Too understand these more head too https://angular.io/docs/ts/latest/cookbook/component-communication.html#bidirectional-service
  private requestSource = new Subject<boolean>(); // 
  requestComplete$ = this.requestSource.asObservable(); //Lets everyone know the request is completed

  //makes a get request with the location data requested from googles geo api
  getDisruptionData(from:string,to:string){
    this.http.get(this.Base_URL+from+'/to/'+to)
        .map(this.extractDisruption)
        .catch(this.handleError)
        .subscribe((data)=>{    //We subscribe to the event here so that it can be requested from somewhere other than the destination of the data
            this.requestSource.next(data) //This fires an event containing the response object and lets the rest of the application know the tfl request has successfully returned results
        })
  }

//Formats the json object returned so it contains only what we need
extractDisruption(res:Response):Object[]{
  let data = res.json()
  let array = []
   

    //Im so sorry (Thanks tfl for this wonderful response object)
    data.journeys.map(function(obj){
      obj.legs.map(function(obj){
         obj.disruptions.map(function(obj){
           //if(obj.category!=='Information'){ //You can filter out categorys
           array.push(obj)//}
         })
      })})
     return array
}

//Handle the error (This is just copied off the internet... shhhh )
private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
