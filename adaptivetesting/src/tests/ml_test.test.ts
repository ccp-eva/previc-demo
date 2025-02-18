import { MaximumLikelihoodEstimator } from "../Math/MaximumLikelihoodEstimator";
import { describe, test, expect } from "@jest/globals";

describe("Maximum Likelihood Estimation", () => {
    test("Calculate likelihood", () => {
        const estimator = new MaximumLikelihoodEstimator();

        const ResponsePattern = [0, 1, 0];
        const ItemDifficulties = [0.7, 0.9, 0.6];

        expect(estimator.Likelihood(ResponsePattern, ItemDifficulties, 0))
            .toBeCloseTo(0.1247020);
    });


    test("Find and calculate MLE for test data", () => {
        const estimator = new MaximumLikelihoodEstimator();

        const ResponsePattern = [0, 1, 0];
        const ItemDifficulties = [0.7, 0.9, 0.6];

        //For this dataset, the maximum of the likelihood function
        //should be 0.12476 with an ability level of 0.0375530712.
        //(Calculated with WolframAlpha and Geogebra)


        expect(estimator.GetMaximumLikelihoodEstimation(ResponsePattern, ItemDifficulties))
            .toBeCloseTo(0.0375530712, 2);
    });

    test("Result test Eid 4.26", () => {
        const estimator = new MaximumLikelihoodEstimator();
        const ResponsePattern = [1, 0];
        const ItemDifficulties = [-1.603, 0.909];

        expect(estimator.GetMaximumLikelihoodEstimation(ResponsePattern, ItemDifficulties)).toBeCloseTo(-0.347);
    });

    test("catR item 1 and 2", () => {
        const estimator = new MaximumLikelihoodEstimator();
        const ResponsePattern = [1, 0];
        const ItemDifficulties = [-2.1851, -0.2897194];

        const result = estimator.GetMaximumLikelihoodEstimation(ResponsePattern, ItemDifficulties);

        expect(result).toBeCloseTo(-1.237413);
    });
});