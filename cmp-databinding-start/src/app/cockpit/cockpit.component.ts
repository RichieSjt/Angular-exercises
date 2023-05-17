import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    type: string;
    serverName: string;
    serverContent: string;
  }>();
  //   newServerName = '';
  //   newServerContent = '';
  @ViewChild('serverContent', {static: true}) serverContent: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(type: string, serverName: HTMLInputElement) {
    this.serverCreated.emit({
      type: type,
      serverName: serverName.value,
      serverContent: this.serverContent.nativeElement.value,
    });
  }
}
