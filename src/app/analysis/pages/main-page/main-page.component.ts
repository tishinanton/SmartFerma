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
            data: [2.3, 2.3, 2.3, 2.3, 2.3, 2.3],
            backgroundColor: this.barBackgroundColor[0]
        },
        {
            label: 'Удобрения',
            data: [3.3, 3.3, 3.3, 3.3, 3.3, 3.3],
            backgroundColor: this.barBackgroundColor[1]
        },
        {
            label: 'Оплата труда',
            data: [2.9, 2.9, 2.9, 2.9, 2.9, 2.9],
            backgroundColor: this.barBackgroundColor[2]
        },
        {
            label: 'Электр./Вода',
            data: [1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
            backgroundColor: this.barBackgroundColor[3]
        },
        {
            label: 'ГСМ',
            data: [4.5, 4.5, 4.5, 4.5, 4.5, 4.5],
            backgroundColor: this.barBackgroundColor[4]
        },
        {
            label: 'Иные расходы',
            data: [0.8, 0.8, 0.8, 0.8, 0.8, 0.8],
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
            data: [2.5, 3, 1.8, 3.6, 4, 3.6],
            backgroundColor: ['rgba(59, 134, 255, 0.3)'],
            borderColor: ['#3B86FF'],
            borderWidth: 1
        },
        {
            label: '2018',
            data: [3.8, 2.8, 4, 1, 3, 2.1],
            backgroundColor: ['rgba(163, 160, 251, 0.3)'],
            borderColor: ['#A3A0FB'],
            borderWidth: 1,
        }
    ];
    public radarOptions: any = {
        ...this.defaultOptions,
        scale: {
            ticks: {
                beginAtZero: true
            }
        },
        legend: {
            position: 'right',
            labels: {
                usePointStyle: true
            }
        },

    };

    @ViewChild('lineChart') lineChart: ChartWrapperComponent;
    public greenGradient: CanvasGradient;
    public lineLabels = ['2013', '2014', '2015', '2016', '2017', '2018'];
    public lineDatasets: ChartDataSets[] = [
        {
            label: 'Удобрения',
            data: [8.2, 5.6, 5.3, 3.8, 5.4, 7],
            backgroundColor: this.greenGradient,
            // borderColor: ['#3B86FF'],
            borderWidth: 1
        },
        {
            label: 'Семена',
            data: [7.6, 7, 5.6, 8.4, 7.3, 7.9],
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
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    };

    public doughnutLabels = ['Факт 11.3 млн тенге', 'План 63.8 млн тенге'];
    public doughnutDatasets = [{
        label: '# of Votes',
        data: [11.3 / 75.1, 63.8 / 75.1],
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
        const greenGradient = chart.ctx.createLinearGradient(0, 0, 1, 1);
        const yellowGradient = chart.ctx.createLinearGradient(0, 0, 1, 1);

        greenGradient.addColorStop(0, 'rgba(93, 243, 129, 0)');
        greenGradient.addColorStop(1, 'rgba(100, 213, 128, 1)');

        yellowGradient.addColorStop(0, 'rgba(255, 234, 171, 1)');
        yellowGradient.addColorStop(1, 'rgba(255, 216, 100, 1)');

        this.lineDatasets[0].backgroundColor = greenGradient;
        this.lineDatasets[1].backgroundColor = yellowGradient;

        chart.update();
    }

}
