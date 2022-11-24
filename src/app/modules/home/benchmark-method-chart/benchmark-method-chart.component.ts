import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-benchmark-method-chart',
  templateUrl: './benchmark-method-chart.component.html',
  styleUrls: ['./benchmark-method-chart.component.css']
})
export class BenchmarkMethodChartComponent implements OnInit {

  public chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };
  constructor() { }

  ngOnInit(): void {
  }

}
