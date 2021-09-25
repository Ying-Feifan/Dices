import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, scaleService } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Soma dos dados' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          stepSize: 1,
          max: 12,
          min:0
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
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  public diceValue1: any;
  public diceValue2: any;
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
    console.log(this.diceValue1, this.diceValue2)
    this.lineChartData[0].data?.push(this.diceValue1 + this.diceValue2)
    this.lineChartLabels.push(this.lineChartLabels.length.toString())
    this.setDicesValue();
  }

  clean() {
    this.lineChartData[0].data = [];
    this.lineChartLabels = []
  }

  getRandomInt(max: number) {
    return Math.ceil(Math.random() * max);
  }

}
