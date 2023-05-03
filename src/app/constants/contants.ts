export const PAYMENT_DATE_FORMAT: string = 'YYYY-MM-DD';

export const PAYMENT_FREQUENCIES = {
    ONE_TIME: 'OneTime',
    WEEKLY: 'Weekly',
    MONTHLY: 'Monthly'
};

export const PAYMENT_FREQUENCY_OPTIONS_MAP: Map<string, string> = new Map([
    [PAYMENT_FREQUENCIES.ONE_TIME, 'Description for one time'],
    [PAYMENT_FREQUENCIES.WEEKLY, 'Description for weekly'],
    [PAYMENT_FREQUENCIES.MONTHLY, 'Description for monthly']
]);