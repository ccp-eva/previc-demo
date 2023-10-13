"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestItem = void 0;
class TestItem {
    word;
    Difficulty;
    EstErrorIntercept;
    Q25Intercept;
    Q975Intercept;
    //math
    constructor(Difficulty) {
        if (Difficulty != undefined) {
            this.Difficulty = Difficulty;
        }
    }
}
exports.TestItem = TestItem;
