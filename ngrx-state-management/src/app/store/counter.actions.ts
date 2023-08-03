import { createAction, props } from "@ngrx/store";

export const init = createAction(
  '[Counter] Init'
)
export const set = createAction(
  '[Counter] Set',
  props<{ value: number }>()
)

export const operation = createAction(
  '[Counter] operation',
  props<{ value: number }>()
);