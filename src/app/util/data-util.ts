import { Injectable } from "@angular/core";
import { cloneDeep } from 'lodash';
import * as moment from 'moment';
import { Moment } from 'moment';
import { PAYMENT_DATE_FORMAT } from "../constants/contants";

@Injectable({
    providedIn: 'root'
})
export class DataUtil {
    public static clone<T>(object: T): T {
        return cloneDeep(object);
    }

    public static convertMomentToString(dateTime: Moment = moment()): string {
        return dateTime.format(PAYMENT_DATE_FORMAT);
    }

    public static convertStringToMoment(date: string = ''): Moment {
        if (!date) {
            const currentDate = moment().format(PAYMENT_DATE_FORMAT);
            return moment(currentDate, PAYMENT_DATE_FORMAT);
        }

        return moment(date, PAYMENT_DATE_FORMAT);
    }
}
