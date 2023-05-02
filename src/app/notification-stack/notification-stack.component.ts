import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-notification-stack',
    templateUrl: './notification-stack.component.html',
    styleUrls: ['./notification-stack.component.css']
})
export class NotificationStackComponent implements OnInit {
    notificationsToDisplay: Set<string>;
    @Output() childNotificationEvent: EventEmitter<string> = new EventEmitter();

    constructor() {
        this.notificationsToDisplay = new Set()
    }

    ngOnInit(): void {
    }

    addNotification(notificationName: string): void {
        this.notificationsToDisplay.add(notificationName);
    }

    removeNotification(notificationName: string): void {
        this.notificationsToDisplay.delete(notificationName);
    }

    handleChildNotificationEvent(event: string): void {
        this.childNotificationEvent.emit(event);
    }

    public static updateNotificationStack(
        stackToUpdate: NotificationStackComponent,
        notificationName: string,
        displayNotification: boolean
    ): void {
        if (stackToUpdate) {
            if (displayNotification)
                stackToUpdate.addNotification(notificationName);
            else
                stackToUpdate.removeNotification(notificationName);
        }
    }
}
