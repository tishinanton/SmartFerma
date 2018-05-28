import { Component, OnInit, OnDestroy, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

    constructor(private store: StoreService, private cd: ChangeDetectorRef) { }

    ngOnInit() {
        setTimeout(() => {
            this.store.toolbarsVisibilitySubject.next(false);
        }, 0);
    }

    ngOnDestroy() {
        this.store.toolbarsVisibilitySubject.next(true);
    }

}
