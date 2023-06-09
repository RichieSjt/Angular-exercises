import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private observableSub: Subscription;

  constructor() { }

  ngOnInit() {
    // this.observableSub = interval(1000).subscribe(count => {
    //   console.log(count)
    // })

    const customIntervalObservable = new Observable<number>(observer => {
      let count = 0
      setInterval(() => {
        observer.next(count)

        if(count === 2) {
          observer.complete()
        }

        if(count > 3) {
          observer.error(new Error('Count is greater than 3'))
        }

        count++
      }, 1000)
    })

    

    this.observableSub = customIntervalObservable
    .pipe(map((data: number) => {
      // Transforming data
      return `Round ${data + 1}`;
    }))
    .subscribe((count) => {
      console.log(count)
    }, (error) => {
      alert(error.message)
    }, () => {
      // On complete
      console.log('Completed!')
    })
  }

  ngOnDestroy() {
    this.observableSub.unsubscribe()
  }

}
