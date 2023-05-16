import { Component } from '@angular/core';

@Component({
  selector: 'server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline'

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getColor = () => {
        return this.serverStatus === 'online' ? 'green' : 'red'
    }
}
