import { Component, OnInit } from '@angular/core';

import { AlertModel, AlertTypeModel } from './_models/index';
import { AlertsService } from './_services/index';

@Component({
    selector: 'alert',
    templateUrl: '../../layout/default/alerts.component.html'
})

export class AlertsComponent implements OnInit {
    alerts: AlertModel[] = [];

    constructor(
      private alertsService: AlertsService
    ) { }

    ngOnInit() {
        this.alertsService.getAlert().subscribe((alert: AlertModel) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
            // add alert to array
            this.alerts.push(alert);
        });
    }

    removeAlert(alert: AlertModel) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }

    cssClass(alert: AlertModel) {
        if (!alert) {
            return;
        }

        // return css class based on alert type
        switch (alert.type) {
            case AlertTypeModel.Success:
                return 'alert alert-success';
            case AlertTypeModel.Error:
                return 'alert alert-danger';
            case AlertTypeModel.Info:
                return 'alert alert-info';
            case AlertTypeModel.Warning:
                return 'alert alert-warning';
        }
    }
}
