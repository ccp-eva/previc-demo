import { TestItem } from "../Models/TestItem";

export function TestInformationFunction(AnsweredItems: TestItem[], Ability: number): number {
    //initialize item information
    let information: number = 0;

    AnsweredItems.forEach((item) => {
        const p_right: number = (Math.exp(1 * (item.Difficulty - Ability))) / (1 + Math.exp(item.Difficulty - Ability));

        const p_wrong: number = 1 / (1 + Math.exp(item.Difficulty - Ability));

        const product = p_right * p_wrong;

        //add to information
        information = information + product;
    });

    return information;
}