"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardError = void 0;
const TestInformationFunction_1 = require("./TestInformationFunction");
function StandardError(AnsweredItems, EstimatedAbilityLevel) {
    const error = 1 / Math.sqrt((0, TestInformationFunction_1.TestInformationFunction)(AnsweredItems, EstimatedAbilityLevel));
    return error;
}
exports.StandardError = StandardError;
