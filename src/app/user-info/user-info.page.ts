import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-user-info',
  templateUrl: 'user-info.page.html',
  styleUrls: ['user-info.page.scss']
})
export class UserInfoPage {
  @ViewChild('barChart') barChart;
  bars: any;
  colorArray: any;

  constructor() {}

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Nombre de quiz',
          data: [3, 10, 5, 12, 7, 8, 15, 7],
          backgroundColor: 'rgb(233, 150, 122)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(233, 150, 122)', // array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
