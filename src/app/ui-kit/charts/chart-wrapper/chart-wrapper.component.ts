import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { ChartComponent } from '../chart/chart.component';

@Component({
    selector: 'app-chart-wrapper',
    templateUrl: './chart-wrapper.component.html',
    styleUrls: ['./chart-wrapper.component.scss']
})
export class ChartWrapperComponent implements OnInit {

    filter = 2018;

    @Input() type: ChartType;
    @Input() chartTitle: string;
    @Input() labels: (string | string[])[] = [];
    @Input() datasets: ChartDataSets[] = [];
    @Input() options: ChartOptions[] = [];
    @Output() chartGenerated = new EventEmitter<Chart>();

    constructor() { }

    ngOnInit() {
    }

}
