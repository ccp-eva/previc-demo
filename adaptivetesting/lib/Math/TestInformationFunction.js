"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestInformationFunction = void 0;
function TestInformationFunction(AnsweredItems, Ability) {
    //initialize item information
    let information = 0;
    AnsweredItems.forEach((item) => {
        const p_right = (Math.exp(1 * (item.Difficulty - Ability))) / (1 + Math.exp(item.Difficulty - Ability));
        const p_wrong = 1 / (1 + Math.exp(item.Difficulty - Ability));
        const product = p_right * p_wrong;
        //add to information
        information = information + product;
    });
    return information;
}
exports.TestInformationFunction = TestInformationFunction;
