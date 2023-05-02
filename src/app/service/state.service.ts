import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private readonly _isFirstNameEqualHyalen: BehaviorSubject<boolean>;
  public readonly isFirstNameEqualHyalen$: Observable<boolean>;

  constructor() {
    this._isFirstNameEqualHyalen = new BehaviorSubject(false);
    this.isFirstNameEqualHyalen$ = this._isFirstNameEqualHyalen.asObservable().pipe(distinctUntilChanged());
  }

  updateStateForSomething(firstName: String, zipCode: String) {
    // throw new Error('Method not implemented.');
  }

  updateStateForFirstName(firstName: String) {
    this.pushisFirstNameEqualHyalen(firstName == 'Hyalen');
  }
   
  updateHeroForZipCode(zipCode: String) {
    // throw new Error('Method not implemented.');
  }

  public pushisFirstNameEqualHyalen(value: boolean) : void {
    this._isFirstNameEqualHyalen.next(value);
  }

  public reset(): void {
    this._isFirstNameEqualHyalen.next(false);
  }
}
