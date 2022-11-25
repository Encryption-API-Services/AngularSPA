import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { HomeBenchMark } from 'src/app/model/HomeBenchMark';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { BenchmarkMethodChartFormatterService } from '../services/benchmark-method-chart-formatter.service';

@Component({
  selector: 'app-benchmark-method-chart',
  templateUrl: './benchmark-method-chart.component.html',
  styleUrls: ['./benchmark-method-chart.component.css']
})
export class BenchmarkMethodChartComponent implements OnInit {

  public chartOption!: EChartsOption;
  public canDisplay: boolean = false;

  constructor(private formatter: BenchmarkMethodChartFormatterService, private http: HttpService) { }

  ngOnInit(): void {
    this.getBenchMarkData();
  }

  public getBenchMarkData(): void {
    this.http.get(environment.apiUrl + "UIData/GetHomeBenchmarkData").subscribe((response: any) => {
      this.createLast25RequestChart(response);
    }, (error) => {

    });
  }

  private createLast25RequestChart(httpResponse: HomeBenchMark): void {
    let xAxisData: string[] = [];
      let yAxisData: number[] = [];
      for (let i = 0; i < httpResponse.data.length; i++) {
        if (!xAxisData.includes(httpResponse.data[i].details.method)) {
          xAxisData.push(httpResponse.data[i].details.method);
          let count = 0;
          for (let j = 0; j < httpResponse.data.length; j++) {
            if (httpResponse.data[j].details.method === httpResponse.data[i].details.method) {
              count++;
            }
          }
          yAxisData.push(count)
        }
      }
      this.chartOption =  {
        xAxis: {
          type: 'category',
          data: xAxisData,
          z: 2
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: yAxisData,
            type: 'bar',
          },
        ],
      };
      this.canDisplay = true;
  }
}
