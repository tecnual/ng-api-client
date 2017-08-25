export class AlertModel {
    type: AlertTypeModel;
    message: string;
}

export enum AlertTypeModel {
    Success,
    Error,
    Info,
    Warning
}
