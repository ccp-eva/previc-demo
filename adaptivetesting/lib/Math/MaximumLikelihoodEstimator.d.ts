export declare class MaximumLikelihoodEstimator {
    /**
     * This function return the ability level which maximizes the likelihood function
     * for the given response pattern and item difficulties.
     *
     * @param ResponsePattern
     * @param ItemDifficulties
     * @returns
     */
    GetMaximumLikelihoodEstimation(ResponsePattern: number[], ItemDifficulties: number[]): number;
    /**
     * This function calculates the likelihood for the provided item difficulties and response pattern.
     * Both arrays have to be the same length.
     * @param ResponsePattern
     * @param ItemDifficulties
     * @param Ability
     * @returns Likelihood
     */
    Likelihood(ResponsePattern: number[], ItemDifficulties: number[], Ability: number): number;
}
