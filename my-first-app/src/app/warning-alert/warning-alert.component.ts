import { Component } from '@angular/core';

@Component ({
    selector: 'app-warning-alert',
    template: `
        <p>
        Component created with warnings!
        </p>
    `,
    styles: [`
        p {
            border: 3px solid red;
            padding: 10px;
            background-color: mistyrose;
        }
    `]

})
export class WarningAlertComponent {

}