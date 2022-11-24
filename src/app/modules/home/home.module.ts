import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BenchmarkMethodChartComponent } from './benchmark-method-chart/benchmark-method-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    HomeComponent,
    BenchmarkMethodChartComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxEchartsModule
  ]
})
export class HomeModule { }
