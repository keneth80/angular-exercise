import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-base',
    template: `NO UI TO BE FOUND HERE!`
})
export class BaseComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription;

    constructor() {
        this.subscriptions = new Subscription();
    }

    set subscription(value: Subscription) {
        this.subscriptions.add(value);
    }

    ngOnInit() {}

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        if (console && console.log) {
            console.log('BaseComponent.destroy');
        }
    }
}
