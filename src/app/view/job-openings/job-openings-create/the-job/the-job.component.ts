import { Component, OnInit } from '@angular/core';
import { Options,LabelType  } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-the-job',
  templateUrl: './the-job.component.html',
  styleUrls: ['./the-job.component.scss']
})
export class TheJobComponent implements OnInit {
  options: Options = {
    floor: 0,
    ceil: 30,
    step: 1,
    showTicks: true,
    showTicksValues: false,
    getLegend: (value: number): string => {
      return "" + value;
    }
   
  };
  optionsMinMax: Options = {
    floor: 14500,
    ceil: 16000,
    step: 1,
    showTicks: true,
    showTicksValues: false,
    getLegend: (value: number): string => {
      return "" + value;
    },
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<small>Minimum:' + value + 'Years </small>';
        case LabelType.High:
          return '<small>Maximum :' + value + 'Years</small>';
        default:
          return '$' + value;
      }
    }
  };
  workExperiance = 0;
  value: number = 14700;
  highValue: number = 15500;
  constructor() { }

  ngOnInit(): void {
  }

}
