import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, distinctUntilChanged } from 'rxjs';
import { Hero } from '../hero';
import { DataUtil } from '../util/data-util';
import { heroInitial } from '../constants/preconfigured-data';
import { LogicUtil } from '../util/logic-util';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private readonly _isFirstNameEqualHyalen: BehaviorSubject<boolean>;
  private readonly _isZipCodeLengthGreaterThan9: BehaviorSubject<boolean>;
  private readonly _hero: BehaviorSubject<Hero>;

  public readonly isFirstNameEqualHyalen$: Observable<boolean>;
  public readonly isZipCodeLengthGreaterThan9$: Observable<boolean>;
  public readonly isSomethingElse$: Observable<boolean>;
  public readonly hero$: Observable<Hero>;

  constructor() {
    this._isFirstNameEqualHyalen = new BehaviorSubject(false);
    this.isFirstNameEqualHyalen$ = this._isFirstNameEqualHyalen.asObservable().pipe(distinctUntilChanged());
    
    this._isZipCodeLengthGreaterThan9 = new BehaviorSubject(false);
    this.isZipCodeLengthGreaterThan9$ = this._isZipCodeLengthGreaterThan9.asObservable().pipe(distinctUntilChanged());
    
    // Just an example in how to use anyTrue from LogicUtil
    this.isSomethingElse$ = LogicUtil.anyTrue(this._isFirstNameEqualHyalen, this._isZipCodeLengthGreaterThan9).pipe(distinctUntilChanged());

    this._hero = new BehaviorSubject(DataUtil.clone(heroInitial));
    this.hero$ = this._hero.asObservable().pipe(distinctUntilChanged(LogicUtil.deepEqual));
  }

  updateStateForSomething(firstName: string, zipCode: string) {
    // Here you gonna add some logic according to the variables values. 
    // For example: if (firstName == 'Gabriela' and zipCode == '11223344') then this._someBehaviorSubject.next(someValue);
    // throw new Error('Method not implemented.');
  }

  // The same as above here. The difference is that now we only have one variable to deal with
  updateStateForFirstName(firstName: string) {
    this.pushIsFirstNameEqualHyalen(firstName == 'Hyalen');
  }
   
  // Example in how to update model based on some values
  updateHeroForZipCode(zipCode: string) {
    // TODO: Hyalen, remove comments below
    // const updatedHero: Hero = DataUtil.clone(this._hero.value);
    // updatedHero.zipCode = zipCode;
    // this._hero.next(updatedHero);
    this.pushIsZipCodeLengthGreaterThan9(zipCode.length > 9);
  }

  public pushIsFirstNameEqualHyalen(value: boolean) : void {
    this._isFirstNameEqualHyalen.next(value);
  }

  public pushIsZipCodeLengthGreaterThan9(value: boolean) : void {
    this._isZipCodeLengthGreaterThan9.next(value);
  }
  
  public reset(): void {
    this._isFirstNameEqualHyalen.next(false);
    this._hero.next(heroInitial);
  }
}
