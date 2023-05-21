import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  statusChangeCounter = 0

  increaseCounter = () => {
    this.statusChangeCounter += 1
    console.log("Counter is now: ", this.statusChangeCounter);
  } 

  constructor() { }
}
