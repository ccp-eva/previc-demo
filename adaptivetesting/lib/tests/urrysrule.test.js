"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const UrrysRule_1 = require("../Math/UrrysRule");
const TestItem_1 = require("../Models/TestItem");
const OldItems_1 = require("../Data/OldItems");
(0, globals_1.describe)("Urrys Rule", () => {
    const item1 = new TestItem_1.TestItem();
    item1.Difficulty = 0.24;
    item1.word = "A";
    const item2 = new TestItem_1.TestItem();
    item2.Difficulty = 0.89;
    item2.word = "B";
    const item3 = new TestItem_1.TestItem();
    item3.Difficulty = -0.6;
    item3.word = "C";
    const items = [
        item1, item2, item3
    ];
    (0, globals_1.test)("Selection of item when ability level is 0.", () => {
        const ability_level = 0;
        (0, globals_1.expect)((0, UrrysRule_1.UrrysRule)(items, ability_level)).toEqual(item1);
    });
    (0, globals_1.test)("Selection of item when ability level is -0.5", () => {
        const ability_level = -0.5;
        (0, globals_1.expect)((0, UrrysRule_1.UrrysRule)(items, ability_level)).toEqual(item3);
    });
    (0, globals_1.test)("catR test", () => {
        const ability_level = -2.239;
        (0, globals_1.expect)((0, UrrysRule_1.UrrysRule)(OldItems_1.OldTestItems, ability_level).Difficulty).toBeCloseTo(-2.2309);
    });
    (0, globals_1.test)("Tonne vs Zange", () => {
        const ability_level = 4;
        (0, globals_1.expect)((0, UrrysRule_1.UrrysRule)(OldItems_1.OldTestItems, ability_level).word).toBe("Tonne");
    });
    (0, globals_1.test)("Frisur test", () => {
        const ability_level = 3.13;
        const result = (0, UrrysRule_1.UrrysRule)(OldItems_1.OldTestItems, ability_level);
        (0, globals_1.expect)(result.word).toBe("Frisur");
    });
});
