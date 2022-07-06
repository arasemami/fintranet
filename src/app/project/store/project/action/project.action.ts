import { createAction, props } from "@ngrx/store";

export const SelectedProjectAction = createAction(
  '[Project] Selected Project Action'
);

export const DefineProjectAction = createAction(
  '[Project] Define Project Action',
  props<{ payload: any }>()
);
