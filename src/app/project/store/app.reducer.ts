import { ProjectReducer } from "./project";
import { ActionReducerMap } from "@ngrx/store";

export const appReducers: ActionReducerMap<any> = {
    project: ProjectReducer,
};
