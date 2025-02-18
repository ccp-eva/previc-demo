"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ImprovedMLE_1 = require("../Math/ImprovedMLE");
const globals_1 = require("@jest/globals");
(0, globals_1.describe)("Improved ML", () => {
    (0, globals_1.test)("Calculate likelihood", () => {
        const ResponsePattern = [0, 1, 0];
        const ItemDifficulties = [0.7, 0.9, 0.6];
        const estimator = new ImprovedMLE_1.ImprovedMLE(ResponsePattern, ItemDifficulties);
        (0, globals_1.expect)(estimator.LikelihoodFunction(0))
            .toBeCloseTo(0.1247020);
    });
    (0, globals_1.test)("Find and calculate MLE for test data", () => {
        const ResponsePattern = [0, 1, 0];
        const ItemDifficulties = [0.7, 0.9, 0.6];
        const estimator = new ImprovedMLE_1.ImprovedMLE(ResponsePattern, ItemDifficulties);
        //For this dataset, the maximum of the likelihood function
        //should be 0.12476 with an ability level of 0.0375530712.
        //(Calculated with WolframAlpha and Geogebra)
        (0, globals_1.expect)(estimator.FindMax())
            .toBeCloseTo(0.0375530712, 2);
    });
    (0, globals_1.test)("One item", () => {
        const estimator = new ImprovedMLE_1.ImprovedMLE([0], [0.3]);
        (0, globals_1.expect)(globals_1.jest.fn(() => estimator.FindMax())).toThrowError();
    });
    (0, globals_1.test)("Result test Eid 4.26", () => {
        const ResponsePattern = [1, 0];
        const ItemDifficulties = [-1.603, 0.909];
        const estimator = new ImprovedMLE_1.ImprovedMLE(ResponsePattern, ItemDifficulties);
        (0, globals_1.expect)(estimator.FindMax()).toBeCloseTo(-0.347);
    });
    (0, globals_1.test)("catR item 1 and 2", () => {
        const ResponsePattern = [1, 0];
        const ItemDifficulties = [-2.1851, -0.2897194];
        const estimator = new ImprovedMLE_1.ImprovedMLE(ResponsePattern, ItemDifficulties);
        const result = estimator.FindMax();
        (0, globals_1.expect)(result).toBeCloseTo(-1.237413);
    });
});
