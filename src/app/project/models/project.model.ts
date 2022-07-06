import { IPerson } from "./people.model";

export interface IProject {
    image: string;
    amount: number;
    status: string;
    date: Date;
    source: string;
    person: IPerson;
}