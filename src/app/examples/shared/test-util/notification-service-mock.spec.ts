import { BehaviorSubject } from "rxjs";

export function generateMockNotificaionService(): any {
    const mockNotificationService: any = jasmine.createSpyObj('mockNotificationService', [
        'pushShowDuplicatedUserNotification',
        'pushShowInvalidZipCodeNotification'
    ]);

    mockNotificationService.showDuplicatedUserNotification$ = new BehaviorSubject(false);
    mockNotificationService.showInvalidZipCodeNotification$ = new BehaviorSubject(false);

    resetMockNotificationService(mockNotificationService);

    return mockNotificationService;
}

export function resetMockNotificationService(mockNotificationService: any): void {
    mockNotificationService.showDuplicatedUserNotification$.next(false);
    mockNotificationService.showInvalidZipCodeNotification$.next(false);

    mockNotificationService.pushShowDuplicatedUserNotification.calls.reset();
    mockNotificationService.pushShowInvalidZipCodeNotification.calls.reset();
}