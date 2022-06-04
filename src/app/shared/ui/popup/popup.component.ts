import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
    @Input() isDouble: boolean = false;
    isActive: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

}
