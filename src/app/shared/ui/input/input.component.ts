import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent {
    @Input() placeholder: string = '';
    @Input() width: number = 380;
    @Input() disabled: boolean = false;
    @Input() type!: string;
}
