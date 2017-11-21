import { Component } from '@angular/core';

@Component({
    selector: "app-assignment-2",
    templateUrl: "./assignment-2.component.html",
    // styleUrls: [""]
})
export class Assignment2 {
    username = "";

    constructor () {

    }

    resetUsername() {
        this.username = "";
    }
}