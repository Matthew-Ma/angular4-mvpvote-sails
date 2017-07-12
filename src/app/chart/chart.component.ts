import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular2-highcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './chart.component.html'
})
export class BarChartComponent {
  options: Object;
  constructor() {
    this.options = {
      chart: {
        type: 'column'
    },
    title: {
        text: 'LEAGUE COMPARISON'
    },
    xAxis: {
        categories: ['PPG', 'RPG', 'APG', 'FT%', '3P%']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Player',
        data: [34.4, 9.7, 7.1, 72.8, 46.8]
    }, {
        name: 'League',
        data: [9.6, 3.8, 2, 77.5, 33.5]
    }]
    }
  }
}
