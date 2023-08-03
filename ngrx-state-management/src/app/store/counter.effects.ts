import { Actions, createEffect, ofType } from "@ngrx/effects";
import { init, operation, set } from "./counter.actions";
import { tap, withLatestFrom, switchMap, of } from 'rxjs';
import { Injectable } from '@angular/core'
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selectors";

@Injectable()
export class CounterEffects {
  loadCount = createEffect(
    () => this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const storedCounter = localStorage.getItem('count');
        // We return a new action (set) as an observable using of
        if(storedCounter)
          return of(set({ value: +storedCounter }))
          
        return of(set({ value: 0 }))
      })
    )
  )

  saveCount = createEffect(
    // actions$ listens to all triggered actions in the store, 
    // ofType filters them to the ones we are interested in
    () => this.actions$.pipe(
      ofType(operation),
      withLatestFrom(this.store.select(selectCount)),
      tap(([action, counter]) => {
        console.log(action)
        localStorage.setItem('count', counter.toString())
      })
    ), 
    { dispatch : false}
  )

  // This effect does not dispatch a new action once it's fired

  constructor(private actions$: Actions, private store: Store<{counter: number}>) { }
}