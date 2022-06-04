import {Component, OnInit} from '@angular/core';

enum Popups {
    call = 1,
    docs = 2,
    status = 3,
    archive = 4
}

@Component({
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
    Popups = Popups
    currentPopup = Popups.docs
    isRightPopupActive: boolean = false

    showCallPopup() {
        this.currentPopup = Popups.call
        this.isRightPopupActive = false
    }

    showDocsPopup() {
        this.currentPopup = Popups.docs
        this.isRightPopupActive = false
    }

    showStatusPopup() {
        this.currentPopup = Popups.status
        this.isRightPopupActive = true
    }

    showArchivePopup() {
        this.currentPopup = Popups.archive
        this.isRightPopupActive = true
    }
}
