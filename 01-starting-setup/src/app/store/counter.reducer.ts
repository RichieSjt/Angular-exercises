import { createReducer, on } from "@ngrx/store";
import { operation, set } from "./counter.actions";

const initialState = 0

export const counterReducer = createReducer(
  initialState,
  on(operation, (state, action) => state + action.value),
  on(set, (state, action) => action.value),
)

// export const counterReducer = (state = initialState) => {
//   return state
// }