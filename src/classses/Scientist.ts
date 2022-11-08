import type { Formula } from "./Formula";

export class Scientist {
    id: number;
    name: string;
    formulas?: Array<Formula>;

    constructor(id: number, name: string, formulas?: Array<Formula>) {
        this.id = id;
        this.name = name;
        this.formulas = formulas;
    }
}