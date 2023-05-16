import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = ''
  serverCreated = false
  servers = ['TestServer']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

//   serverNameHandler = (event: any) => {
//     this.serverName = event.target.value;
//   }

  createServerHandler = () => {
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
    this.serverCreated = true
    this.servers.push(this.serverName)
  };
}
