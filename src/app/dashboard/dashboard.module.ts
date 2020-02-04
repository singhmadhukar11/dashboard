import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'angular-highcharts';
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartModule,
    LeafletModule.forRoot(),
    HttpClientModule
  ]
})
export class DashboardModule { }
