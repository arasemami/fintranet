import { IProject } from "src/app/project/models/project.model";

export interface IProjectState {
    project: IProject | null;
}

export const initialProjectState: IProjectState = {
    project: null
};
