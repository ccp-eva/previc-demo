"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const TestItem_1 = require("../Models/TestItem");
const StandardError_1 = require("../Math/StandardError");
(0, globals_1.describe)("Standard Error", () => {
    (0, globals_1.test)("Calculation of standard error for dummy items", () => {
        const item1 = new TestItem_1.TestItem(0.7);
        const item2 = new TestItem_1.TestItem(0.9);
        const item3 = new TestItem_1.TestItem(0.6);
        const TestItems = [item1, item2, item3];
        const ability = 0;
        (0, globals_1.expect)((0, StandardError_1.StandardError)(TestItems, ability)).toBeCloseTo(1.234664423);
    });
    (0, globals_1.test)("Calculation of standard error for test response (Eid)", () => {
        const item1 = new TestItem_1.TestItem(-1.603);
        const item2 = new TestItem_1.TestItem(0.909);
        const items = [item1, item2];
        const ability = -0.347;
        //Result is from CatR
        (0, globals_1.expect)((0, StandardError_1.StandardError)(items, ability)).toBeCloseTo(1.702372);
    });
});
