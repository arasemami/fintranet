import { createSelector } from "@ngrx/store";
import { IProjectState } from "../states/project.state";

const selectProject = (state: any) => state.project;

export const SelectedProjectSelector = createSelector(
    selectProject,
    (state: IProjectState) => state.project
);
