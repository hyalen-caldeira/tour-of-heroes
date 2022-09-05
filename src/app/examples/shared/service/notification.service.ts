import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    public readonly showDuplicatedUserNotification$: Observable<boolean>;
    public readonly showInvalidZipCodeNotification$: Observable<boolean>;

    private readonly _showDuplicatedUserNotification: BehaviorSubject<boolean>;
    private readonly _showInvalidZipCodeNotification: BehaviorSubject<boolean>;

    constructor() {
        this._showDuplicatedUserNotification = new BehaviorSubject(false);
        this.showDuplicatedUserNotification$ = this._showDuplicatedUserNotification
            .asObservable()
            .pipe(distinctUntilChanged());

        this._showInvalidZipCodeNotification = new BehaviorSubject(false);
        this.showInvalidZipCodeNotification$ = this._showInvalidZipCodeNotification
            .asObservable()
            .pipe(distinctUntilChanged());
    }

    public pushShowDuplicatedUserNotification(value: boolean): void {
        this._showDuplicatedUserNotification.next(value);
    }

    public pushShowInvalidZipCodeNotification(value: boolean): void {
        this._showInvalidZipCodeNotification.next(value);
    }
}
