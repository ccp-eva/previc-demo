"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MaximumLikelihoodEstimator_1 = require("../Math/MaximumLikelihoodEstimator");
const globals_1 = require("@jest/globals");
(0, globals_1.describe)("Maximum Likelihood Estimation", () => {
    (0, globals_1.test)("Calculate likelihood", () => {
        const estimator = new MaximumLikelihoodEstimator_1.MaximumLikelihoodEstimator();
        const ResponsePattern = [0, 1, 0];
        const ItemDifficulties = [0.7, 0.9, 0.6];
        (0, globals_1.expect)(estimator.Likelihood(ResponsePattern, ItemDifficulties, 0))
            .toBeCloseTo(0.1247020);
    });
    (0, globals_1.test)("Find and calculate MLE for test data", () => {
        const estimator = new MaximumLikelihoodEstimator_1.MaximumLikelihoodEstimator();
        const ResponsePattern = [0, 1, 0];
        const ItemDifficulties = [0.7, 0.9, 0.6];
        //For this dataset, the maximum of the likelihood function
        //should be 0.12476 with an ability level of 0.0375530712.
        //(Calculated with WolframAlpha and Geogebra)
        (0, globals_1.expect)(estimator.GetMaximumLikelihoodEstimation(ResponsePattern, ItemDifficulties))
            .toBeCloseTo(0.0375530712, 2);
    });
    (0, globals_1.test)("Result test Eid 4.26", () => {
        const estimator = new MaximumLikelihoodEstimator_1.MaximumLikelihoodEstimator();
        const ResponsePattern = [1, 0];
        const ItemDifficulties = [-1.603, 0.909];
        (0, globals_1.expect)(estimator.GetMaximumLikelihoodEstimation(ResponsePattern, ItemDifficulties)).toBeCloseTo(-0.347);
    });
    (0, globals_1.test)("catR item 1 and 2", () => {
        const estimator = new MaximumLikelihoodEstimator_1.MaximumLikelihoodEstimator();
        const ResponsePattern = [1, 0];
        const ItemDifficulties = [-2.1851, -0.2897194];
        const result = estimator.GetMaximumLikelihoodEstimation(ResponsePattern, ItemDifficulties);
        (0, globals_1.expect)(result).toBeCloseTo(-1.237413);
    });
});
