import { Component } from '@angular/core';

@Component({
    selector: "app-assignment-3",
    templateUrl: './assignment-3.component.html',
    styles: [
        `
        .moreLogs {
            color: white;
        }

        `
    ]
})
export class Assignment3 {
    isPasswordVisible = false;
    buttonClickLogs = [];
    totalButtonClicks = 0;

    logButtonClicks() {
        this.totalButtonClicks = this.totalButtonClicks + 1;
        this.buttonClickLogs.push("Visibility mode changed for " + (this.totalButtonClicks) + " time(s)");
    }
}