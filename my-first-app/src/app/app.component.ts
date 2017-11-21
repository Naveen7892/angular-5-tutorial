import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allowNewServer = false;
  serverStatus = "Server was not created!";
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.allowNewServer = true
    // }, 2000);
  }

  onServerCreation() {
    this.serverStatus = "Server is created!";
  }
}
