import {describe, test, expect} from "@jest/globals";
import {TestInformationFunction} from "../Math/TestInformationFunction";
import { TestItem } from "../Models/TestItem";

describe("Test information function", () => {
    test("Calculation of test information with provided test items", () => {
        
        

        const item1 = new TestItem(0.7);
        const item2 = new TestItem(0.9);
        const item3 = new TestItem(0.6);

        const TestItems:TestItem[] = [item1, item2, item3];

        const ability = 0;

        expect(TestInformationFunction(TestItems, ability)).toBeCloseTo(0.6559974211);
    });
});