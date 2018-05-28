import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'app-changes-card',
    templateUrl: './changes-card.component.html',
    styleUrls: ['./changes-card.component.scss']
})
export class ChangesCardComponent implements OnInit {

    @Input() cardTitle = '';
    @Input() value = '';
    @Input() change = '';
    @Input() top = false;
    @Input() bottom = false;

    constructor() { }

    ngOnInit() {
    }

}
