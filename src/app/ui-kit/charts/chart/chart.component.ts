import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { Chart, ChartType, ChartDataSets, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    @ViewChild('canvas') canvasElementRef: ElementRef;

    @Input() type: ChartType;
    @Input() labels: (string | string[])[] = [];
    @Input() datasets: ChartDataSets[] = [];
    @Input() options: ChartOptions;
    @Output() chartGenerated = new EventEmitter<Chart>();

    get canvas() {
        return this.canvasElementRef.nativeElement as HTMLCanvasElement;
    }

    public chart: Chart;

    constructor() { }

    ngOnInit() {
        this.chart = new Chart(this.canvas, {
            type: this.type,
            data: {
                labels: this.labels,
                datasets: this.datasets
            },
            options: this.options
        });
        this.chartGenerated.emit(this.chart);
    }

}
