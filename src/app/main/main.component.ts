import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Soma dos dados' },
  ];
  public lineChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        display: true,
        ticks: {
          stepSize: 1,
          max: 12,
          min: 0
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          stepSize: 1,
          suggestedMax: 50,
          min: 0
        }
      }]
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'bar';
  public lineChartPlugins = [];

  public diceValue1: any;
  public diceValue2: any;
  public data: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  public repetitions: any = 50;
  constructor() { }

  ngOnInit(): void {
    this.setDicesValue();
  }

  setDicesValue() {
    this.diceValue1 = this.getRandomInt(6);
    setTimeout(() => {
      this.diceValue2 = this.getRandomInt(6);
    }, 5);
  }

  submit() {
    const totalDiceValue = this.diceValue1 + this.diceValue2;
    this.data[totalDiceValue - 1] += 1;
    this.lineChartData[0].data = this.data;
    this.lineChartData[0].data = this.lineChartData[0].data.slice();
    this.setDicesValue();
  }

  automatic() {
    setTimeout(() => {
      this.submit();
      let i = Math.max(...this.data);
      if (i < this.repetitions) {
        this.automatic();
      }
    }, 10)

  }

  clean() {
    this.data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.lineChartData[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  getRandomInt(max: number) {
    return Math.ceil(Math.random() * max);
  }

}
