import {describe, test, expect} from "@jest/globals";
import { TestItem } from "../Models/TestItem";
import {StandardError} from "../Math/StandardError";

describe("Standard Error", () => {
    test("Calculation of standard error for dummy items", () => {
        const item1 = new TestItem(0.7);
        const item2 = new TestItem(0.9);
        const item3 = new TestItem(0.6);

        const TestItems:TestItem[] = [item1, item2, item3];

        const ability = 0;

        expect(StandardError(TestItems, ability)).toBeCloseTo(1.234664423);
    });

    test("Calculation of standard error for test response (Eid)", () =>{
        const item1 = new TestItem(-1.603);
        const item2 = new TestItem(0.909);
        const items = [item1, item2];

        const ability = -0.347;

        //Result is from CatR
        expect(StandardError(items, ability)).toBeCloseTo(1.702372);
    });
});