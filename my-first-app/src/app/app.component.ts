import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allowNewServer = false;
  serverStatus = "Server was not created!";
  serverName = "";
  serverCreated = false;
  servers = ["Server 1", "Server 2"];


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
    if(this.serverName) this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverStatus = "Server is created! Server name is " + this.serverName;
  }

  onUpdateServerName2(event: any) {
    console.log(event);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
