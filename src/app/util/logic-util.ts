import * as equal from "fast-deep-equal";
import { Observable, ObservableInput, combineLatest, distinctUntilChanged, map } from "rxjs";

export class LogicUtil {
    public static anyTrue(...observables: Array<ObservableInput<boolean>>): Observable<boolean> {
        return combineLatest(observables).pipe(
            map((values) => values.find((v) => v == true) != undefined),
            distinctUntilChanged()
        );
    }

    public static deepEqual(that: any, other: any): boolean {
        return equal(that, other);
    }
}
