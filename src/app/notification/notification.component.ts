import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StringConstantMap } from '../examples/shared/constants/general-constants';
import { CLICK_EVENTS, NAMES, TYPES } from '../examples/shared/constants/notification-constants';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
    @Output() notificationButtonClicked: EventEmitter<string> = new EventEmitter();
    @Input() public notificationName: string = '';

    readonly NOTIFICATION_CLICK_EVENTS: StringConstantMap = CLICK_EVENTS;
    readonly NOTIFICATION_NAMES: StringConstantMap = NAMES;
    readonly NOTIFICATION_TYPES: StringConstantMap = TYPES;

    constructor() { }

    ngOnInit(): void {
    }

    onButtonClick(event: string): void {
        this.notificationButtonClicked.emit(event);
    }
}
