"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaximumLikelihoodEstimator = void 0;
const ImprovedMLE_1 = require("./ImprovedMLE");
class MaximumLikelihoodEstimator {
    /**
     * This function return the ability level which maximizes the likelihood function
     * for the given response pattern and item difficulties.
     *
     * @param ResponsePattern
     * @param ItemDifficulties
     * @returns
     */
    GetMaximumLikelihoodEstimation(ResponsePattern, ItemDifficulties) {
        const estimator = new ImprovedMLE_1.ImprovedMLE(ResponsePattern, ItemDifficulties);
        return estimator.FindMax();
    }
    /**
     * This function calculates the likelihood for the provided item difficulties and response pattern.
     * Both arrays have to be the same length.
     * @param ResponsePattern
     * @param ItemDifficulties
     * @param Ability
     * @returns Likelihood
     */
    Likelihood(ResponsePattern, ItemDifficulties, Ability) {
        const estimator = new ImprovedMLE_1.ImprovedMLE(ResponsePattern, ItemDifficulties);
        return estimator.LikelihoodFunction(Ability);
    }
}
exports.MaximumLikelihoodEstimator = MaximumLikelihoodEstimator;
