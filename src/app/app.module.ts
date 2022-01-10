import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { ChartModule } from 'angular-highcharts';
//import { HighchartsChartComponent } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Table1Component } from './table1/table1.component';
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { SamfrserviceComponent } from './samfrservice/samfrservice.component';
import {HttpClientModule} from '@angular/common/http';
import { FmComponent } from './fm/fm.component';
import { CrudfmComponent } from './crudfm/crudfm.component';
import { EdlComponent } from './edl/edl.component';
import { EditComponent } from './edl/edit/edit.component';
//import { InsightComponent } from './insight/insight.component';
//import { InsComponent } from './ins/ins.component';


@NgModule({
  declarations: [
    AppComponent,
    Table1Component,
    HomeComponent,
    SamfrserviceComponent,
    FmComponent,
    CrudfmComponent,
    EdlComponent,
    EditComponent,
    //InsightComponent,
    //InsComponent,
    //HighchartsChartComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //ChartModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
