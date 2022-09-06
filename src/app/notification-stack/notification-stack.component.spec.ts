import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { generateMockNotificationStackComponent, resetMockNotificationStackComponent } from '../../shared/test-util/components-mock';

import { NotificationStackComponent } from './notification-stack.component';

describe('NotificationStackComponent', () => {
    let component: NotificationStackComponent;
    let fixture: ComponentFixture<NotificationStackComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NotificationStackComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(NotificationStackComponent);
                component = fixture.componentInstance;
                fixture.detectChanges();
            });
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('#updateNotificationStack', () => {
        let mockNotificationStackComponent: any;

        beforeEach(() => {
            mockNotificationStackComponent = generateMockNotificationStackComponent();
            resetMockNotificationStackComponent(mockNotificationStackComponent);
        });

        it ('should call addNotification on the provided stack with notificationName if displayNotifications is true', () => {
            // GIVEN
            const notificationName: string = 'testName';
            const displayNotification: boolean = true;

            // WHEN
            NotificationStackComponent.updateNotificationStack(mockNotificationStackComponent, notificationName, displayNotification);

            // THEN
            expect(mockNotificationStackComponent.addNotification).toHaveBeenCalledOnceWith(notificationName);
        });

        it ('should call removeNotification on the provided stack with notificationName if displayNotifications is false', () => {
            // GIVEN
            const notificationName: string = 'testName';
            const displayNotification: boolean = false;

            // WHEN
            NotificationStackComponent.updateNotificationStack(mockNotificationStackComponent, notificationName, displayNotification);

            // THEN
            expect(mockNotificationStackComponent.removeNotification).toHaveBeenCalledOnceWith(notificationName);
        });
    });
});
