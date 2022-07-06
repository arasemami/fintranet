import { Action, createReducer, on } from "@ngrx/store";
import { DefineProjectAction, SelectedProjectAction } from "../action/project.action";
import { initialProjectState, IProjectState } from "../states/project.state";

const ProjectReducerInternal = createReducer(
    initialProjectState,
    on(SelectedProjectAction, state => ({
        ...state,
        project: state.project
    })),
    on(DefineProjectAction, (state, { payload }) => ({
        ...state,
        project: { ...state.project, ...payload }
    })),
);

export function ProjectReducer(
    state: IProjectState | undefined,
    action: Action
) {
    return ProjectReducerInternal(state, action);
}
