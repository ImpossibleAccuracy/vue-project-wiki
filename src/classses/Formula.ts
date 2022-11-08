import type { Prop } from "./Prop";

export class Formula {
    id: number;
    title: string;
    description: string;
    text: string;
    inputs: Array<Prop>;
    calc: Function;

    constructor(id: number, title: string, text: string, description: string, inputs: Array<Prop>, calc: Function) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.description = description;
        this.inputs = inputs;
        this.calc = calc;
    }
}