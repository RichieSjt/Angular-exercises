import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ContentChild,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input('serverElement') element: {
    type: string;
    name: string;
    content: string;
  };

  @ViewChild('header', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) contentParagraph: ElementRef;

  constructor() {}

  ngOnInit(): void {
    console.log('Text content:', this.header.nativeElement.textContent);
    console.log('Text content of paragraph:', this.contentParagraph.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    console.log('Text content:', this.header.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log('Text content of paragraph:', this.contentParagraph.nativeElement.textContent);
  }
}
