import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, distinctUntilChanged } from 'rxjs';
import { UserSelectionsModel } from '../models/helper-models';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class UiStateService {
  // private
  private readonly _firstName: BehaviorSubject<string>;
  private readonly _zipCode: BehaviorSubject<string>;

  // Anyone who needs to be informed about changing have to subscribe to these observables
  public readonly firstName$: Observable<String>;
  public readonly zipCode$: Observable<String>;
  public repopulateForm: boolean = false;

  constructor(private stateService: StateService) {
    // 
    this._firstName = new BehaviorSubject("");
    this._zipCode = new BehaviorSubject("");

    //
    this.firstName$ = this._firstName
      .asObservable()
      .pipe(distinctUntilChanged());

    this.zipCode$ = this._zipCode
      .asObservable()
      .pipe(distinctUntilChanged());
    // Other options
    // this.firstName$ = this._firstName
    //   .asObservable()
    //   .pipe(map((variable_name) => variable_name.value))
    //   .pipe(distinctUntilChanged());

    // this.firstName$ = this._firstName
    //   .asObservable()
    //   .pipe(map((checkBox) => checkBox.value))
    //   .pipe(distinctUntilChanged());

    this.createSubscriptions();
  }

  private createSubscriptions(): void {
    // Example in how to use combineLatest
    combineLatest([
      this.firstName$,
      this.zipCode$
    ]).subscribe(([firstName, zipCode]) => {
      this.stateService.updateStateForSomething(firstName, zipCode);
    });

    this.firstName$.subscribe((firstName) => {
      this.stateService.updateStateForFirstName(firstName);
    });

    this.zipCode$.subscribe((zipCode) => {
      this.stateService.updateHeroForZipCode(zipCode);
    });
  }

  public updateFirstName(firstName: string) {
    this._firstName.next(firstName);
  
  }

  public updateZipCode(zipCode: string) {
    this._zipCode.next(zipCode);
  }

  public getUserSelections(): UserSelectionsModel {
    return {
      firstName: this._firstName.value,
      zipCode: this._zipCode.value
    };
  }

  public getRepopulateForm(): boolean {
    return this.repopulateForm;
  }

  public reset(): void {
    this.repopulateForm = false;
    
    this._firstName.next('');
    this._zipCode.next('');
  }
}
