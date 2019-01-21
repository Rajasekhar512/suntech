import { Component } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
    selector: 'jhi-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {

    today = new Date();
    jstoday = '';
    constructor() {
        this.jstoday = formatDate(this.today, 'yyyy', 'en-US', '+0530');
    }
}
