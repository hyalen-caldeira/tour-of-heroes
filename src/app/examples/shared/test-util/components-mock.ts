// --------------------- NotificationStackMock -------
export function generateMockNotificationStackComponent(): any {
    const mockNotificationStackComponent: any = jasmine.createSpyObj(
        'mockNotificationStackComponent', [
            'addNotification',
            'removeNotification',
            'handleChildNotificationEvent'
        ]
    );

    resetMockNotificationStackComponent(mockNotificationStackComponent);

    return mockNotificationStackComponent;
}

export function resetMockNotificationStackComponent(mockNotificationStackComponent: any): void {
    mockNotificationStackComponent.addNotification.calls.reset();
    mockNotificationStackComponent.removeNotification.calls.reset();
    mockNotificationStackComponent.handleChildNotificationEvent.calls.reset();
}

// ---------------------  -------