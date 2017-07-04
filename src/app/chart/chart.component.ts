import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
declare let Chart: any;
@Component({
  selector: 'app-bar-chart',
  templateUrl: './chart.component.html'
})
export class BarChartComponent implements OnInit {
  @ViewChild('donut') donut: ElementRef;
  constructor() { }

  ngOnInit() {
    const donutCtx = this.donut.nativeElement.getContext('2d');

    const data = {
      labels: [
        'Value A',
        'Value B'
      ],
      datasets: [
        {
          'data': [101342, 55342],   // Example data
          'backgroundColor': [
            '#1fc8f8',
            '#76a346'
          ]
        }]
    };

    const chart = new Chart(
      donutCtx,
      {
        'type': 'doughnut',
        'data': data,
        'options': {
          'cutoutPercentage': 50,
          'animation': {
            'animateScale': true,
            'animateRotate': false
          }
        }
      }
    );
  }

}
