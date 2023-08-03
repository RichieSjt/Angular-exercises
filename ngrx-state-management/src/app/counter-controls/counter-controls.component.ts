import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { operation } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(operation({ value: 1 }))
  }

  decrement() {
    this.store.dispatch(operation({ value: -1 }));
  }
}
