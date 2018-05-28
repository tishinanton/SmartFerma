import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    public toolbarsVisibilitySubject = new BehaviorSubject<boolean>(true);
    public toolbarsVisibility = this.toolbarsVisibilitySubject.asObservable();

    constructor() { }
}
