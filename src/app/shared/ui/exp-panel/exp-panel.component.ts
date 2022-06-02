import {Component} from '@angular/core';

@Component({
    selector: 'app-exp-panel',
    templateUrl: './exp-panel.component.html',
    styleUrls: ['./exp-panel.component.scss']
})
export class ExpPanelComponent {
    isPanelOpened: boolean = false

    toggle() {
        this.isPanelOpened = !this.isPanelOpened
    }
}
