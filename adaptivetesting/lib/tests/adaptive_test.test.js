"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const ad = __importStar(require("../Models/AdaptiveTest"));
const OldItems_1 = require("../Data/OldItems");
class AdaptiveTest extends ad.AdaptiveTest {
    constructor(initialAbiityLevel = 0) {
        super(initialAbiityLevel);
        this.Items = OldItems_1.OldTestItems;
    }
}
(0, globals_1.describe)("Adaptive test", () => {
    (0, globals_1.test)("Selection of first test item", async () => {
        const adaptiveTest = new AdaptiveTest();
        const selectedItem = adaptiveTest.GetFirstItem();
        const items = OldItems_1.OldTestItems;
        const expected_item = items.find((item) => {
            if (item.word == "weiblich") {
                return item;
            }
        });
        (0, globals_1.expect)(selectedItem).toEqual(expected_item);
    });
    (0, globals_1.describe)("Selection of next item", () => {
        (0, globals_1.test)("Ability level is positive and equal to an item difficulty", async () => {
            const adaptiveTest = new AdaptiveTest(0.9618);
            const selectedItem = adaptiveTest.GetNextItem();
            const items = OldItems_1.OldTestItems;
            const expected_item = items.find((item) => {
                if (item.Difficulty == 0.9618) {
                    return item;
                }
            });
            (0, globals_1.expect)(selectedItem).toEqual(expected_item);
        });
        (0, globals_1.test)("Ability level is positive and close to an item difficulty", async () => {
            const adaptiveTest = new AdaptiveTest(0.96);
            const selectedItem = adaptiveTest.GetNextItem();
            const items = OldItems_1.OldTestItems;
            const expected_item = items.find((item) => {
                if (item.Difficulty == 0.9618) {
                    return item;
                }
            });
            (0, globals_1.expect)(selectedItem).toEqual(expected_item);
        });
        (0, globals_1.test)("Ability level is negative and equal to an item difficulty", async () => {
            const adaptiveTest = new AdaptiveTest(-1.1303);
            const selectedItem = adaptiveTest.GetNextItem();
            const items = OldItems_1.OldTestItems;
            const expected_item = items.find((item) => {
                if (item.Difficulty == -1.1303) {
                    return item;
                }
            });
            (0, globals_1.expect)(selectedItem).toEqual(expected_item);
        });
        (0, globals_1.test)("Ability level is negative and close to an item difficulty", async () => {
            const adaptiveTest = new AdaptiveTest(-1.13);
            const selectedItem = adaptiveTest.GetNextItem();
            const items = OldItems_1.OldTestItems;
            const expected_item = items.find((item) => {
                if (item.Difficulty == -1.1303) {
                    return item;
                }
            });
            (0, globals_1.expect)(selectedItem).toEqual(expected_item);
        });
    });
});
