import { MaximumLikelihoodEstimator } from "adaptivetesting";

export class AbilityCorrection {
    public ml_estimator: MaximumLikelihoodEstimator;

    public constructor() {
        this.ml_estimator = new MaximumLikelihoodEstimator();
    }
    public GetMaximumLikelihoodEstimation(ResponsePattern: number[], ItemDifficulties: number[]): number {
        let estimation_result: number;

        try {
            estimation_result = this.ml_estimator.GetMaximumLikelihoodEstimation(ResponsePattern, ItemDifficulties);
        }
        catch (e) {
            //override ability estimation when only one type of response has been given
            //test if all responses are 0
            if (ResponsePattern.every(p => p == 0)) {
                return -10;
            }
            //all responses are 1
            if (ResponsePattern.every(p => p == 1)) {
                return +10
            }

            //else: throw error
            throw new Error("Ability estimation error.");
        }

        return estimation_result!;
    }
}