import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartDataSets } from 'chart.js';
import { ChartWrapperComponent } from '../../../ui-kit/charts/chart-wrapper/chart-wrapper.component';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

    public defaultOptions: ChartOptions = {
        aspectRatio: 2.5,
        legend: {
            labels: {
                fontFamily: 'Roboto',
            }
        }
    };

    public labels = ['Янв', 'Фев', 'Мар', 'Май', 'Июн', 'Июл'];
    public barBackgroundColor = ['#702283', '#A4A1FB', '#76B39D', '#93DEFF', '#FF7100', '#E1E152'];
    public datasets: ChartDataSets[] = [
        {
            label: 'Семена',
            data: [10, 11, 12, 8, 5, 3].map(v => Math.random() * 100 % 10),
            backgroundColor: this.barBackgroundColor[0]
        },
        {
            label: 'Удобрения',
            data: [10, 11, 12, 8, 5, 3].map(v => Math.random() * 100 % 10),
            backgroundColor: this.barBackgroundColor[1]
        },
        {
            label: 'Оплата труда',
            data: [10, 11, 12, 8, 5, 3].map(v => Math.random() * 100 % 10),
            backgroundColor: this.barBackgroundColor[2]
        },
        {
            label: 'Электр./Вода',
            data: [10, 11, 12, 8, 5, 3].map(v => Math.random() * 100 % 10),
            backgroundColor: this.barBackgroundColor[3]
        },
        {
            label: 'ГСМ',
            data: [10, 11, 12, 8, 5, 3].map(v => Math.random() * 100 % 10),
            backgroundColor: this.barBackgroundColor[4]
        },
        {
            label: 'Иные расходы',
            data: [10, 11, 12, 8, 5, 3].map(v => Math.random() * 100 % 10),
            backgroundColor: this.barBackgroundColor[5],
            borderCapStyle: 'round',
        }
    ];
    public options: ChartOptions = {
        ...this.defaultOptions,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                categoryPercentage: .7,
                barPercentage: .6
            }]
        }
    };

    public radarLabels = ['Удобрения', 'Семена', 'ГСМ', 'Электричество / Вода', 'Иные расходы', 'Оплата труда'];
    public radarDatasets = [
        {
            label: '2017',
            data: [10, 4, 3, 2, 5, 7].map(v => Math.random() * 100 % 10),
            backgroundColor: ['rgba(59, 134, 255, 0.3)'],
            borderColor: ['#3B86FF'],
            borderWidth: 1
        },
        {
            label: '2018',
            data: [10, 4, 3, 2, 5, 7].map(v => Math.random() * 100 % 10),
            backgroundColor: ['rgba(163, 160, 251, 0.3)'],
            borderColor: ['#A3A0FB'],
            borderWidth: 1
        }
    ];
    public radarOptions: ChartOptions = {
        ...this.defaultOptions,
        legend: {
            position: 'right',
            labels: {
                usePointStyle: true
            }
        }
    };

    @ViewChild('lineChart') lineChart: ChartWrapperComponent;
    public greenGradient: CanvasGradient;
    public lineLabels = ['2013', '2014', '2015', '2016', '2017', '2018'];
    public lineDatasets: ChartDataSets[] = [
        {
            label: 'Удобрения',
            data: [10, 4, 3, 2, 5, 7].map(v => Math.random() * 100 % 10),
            backgroundColor: this.greenGradient,
            // borderColor: ['#3B86FF'],
            borderWidth: 1
        },
        {
            label: 'Семена',
            data: [10, 4, 3, 2, 5, 7].map(v => Math.random() * 100 % 10),
            backgroundColor: ['rgba(163, 160, 251, 0.3)'],
            borderColor: ['#A3A0FB'],
            borderWidth: 1
        }
    ];
    public lineOptions: ChartOptions = {
        ...this.defaultOptions,
        legend: {
            position: 'top',
            labels: {
                usePointStyle: true
            }
        }
    };

    public doughnutLabels = ['Факт', 'План'];
    public doughnutDatasets = [{
        label: '# of Votes',
        data: [11.3, 63.8].map(v => Math.random() * 100 % 10),
        backgroundColor: [
            '#338275',
            '#ABCD9E'
        ],
        borderWidth: 1
    }];
    public doughnutOptions: ChartOptions = {
        ...this.defaultOptions,
        cutoutPercentage: 80,
        legend: {
            position: 'right',
            labels: {
                usePointStyle: true
            }
        },
    };


    constructor() {
    }

    ngOnInit() { }

    chartGenerated(chart: Chart) {
        const greenGradient = chart.ctx.createLinearGradient(0, 0, 10, 10);
        const yellowGradient = chart.ctx.createLinearGradient(0, 0, 10, 10);

        greenGradient.addColorStop(0, 'rgba(93, 243, 129, 0.6)');
        greenGradient.addColorStop(1, 'rgba(100, 213, 128, 0.6)');

        yellowGradient.addColorStop(0, 'rgba(255, 234, 171, 0.6)');
        yellowGradient.addColorStop(1, 'rgba(255, 216, 100, 0.6)');

        this.lineDatasets[0].backgroundColor = greenGradient;
        this.lineDatasets[1].backgroundColor = yellowGradient;

        chart.update();
    }

}
