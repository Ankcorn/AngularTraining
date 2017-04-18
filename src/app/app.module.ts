import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { DisruptionListComponent } from './disruption-list/disruption-list.component';
import { DisruptionComponent } from './disruption/disruption.component';

import { GeoService } from './geo.service'
import { TflService } from './tfl.service'
@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    DisruptionListComponent,
    DisruptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GeoService,TflService],
  bootstrap: [AppComponent]
})
export class AppModule { }
