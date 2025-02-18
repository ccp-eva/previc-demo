"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const TestInformationFunction_1 = require("../Math/TestInformationFunction");
const TestItem_1 = require("../Models/TestItem");
(0, globals_1.describe)("Test information function", () => {
    (0, globals_1.test)("Calculation of test information with provided test items", () => {
        const item1 = new TestItem_1.TestItem(0.7);
        const item2 = new TestItem_1.TestItem(0.9);
        const item3 = new TestItem_1.TestItem(0.6);
        const TestItems = [item1, item2, item3];
        const ability = 0;
        (0, globals_1.expect)((0, TestInformationFunction_1.TestInformationFunction)(TestItems, ability)).toBeCloseTo(0.6559974211);
    });
});
