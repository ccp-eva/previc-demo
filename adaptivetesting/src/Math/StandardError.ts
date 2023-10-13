import { TestInformationFunction } from "./TestInformationFunction";
import { TestItem } from "../Models/TestItem";

export function StandardError(AnsweredItems:TestItem[] ,EstimatedAbilityLevel:number):number{
    const error = 1 / Math.sqrt(TestInformationFunction(AnsweredItems, EstimatedAbilityLevel));

    return error;
}