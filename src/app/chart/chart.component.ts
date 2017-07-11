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
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
    }
  }
}
