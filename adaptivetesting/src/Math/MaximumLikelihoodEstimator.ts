import { ImprovedMLE } from "./ImprovedMLE";

export class MaximumLikelihoodEstimator {


    /**
     * This function return the ability level which maximizes the likelihood function
     * for the given response pattern and item difficulties.
     * 
     * @param ResponsePattern 
     * @param ItemDifficulties 
     * @returns 
     */
    public GetMaximumLikelihoodEstimation(ResponsePattern: number[], ItemDifficulties: number[]) {
        const estimator = new ImprovedMLE(ResponsePattern, ItemDifficulties);
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
    public Likelihood(ResponsePattern: number[], ItemDifficulties: number[],
        Ability: number): number {
        const estimator = new ImprovedMLE(ResponsePattern, ItemDifficulties);
        return estimator.LikelihoodFunction(Ability);
    }
}