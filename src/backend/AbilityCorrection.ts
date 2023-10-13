import { MaximumLikelihoodEstimator } from "adaptivetesting";

export class AbilityCorrection{
    public ml_estimator:MaximumLikelihoodEstimator;

    public constructor(){
        this.ml_estimator = new MaximumLikelihoodEstimator();
    }    
    public GetMaximumLikelihoodEstimation(ResponsePattern: number[], ItemDifficulties: number[]): number {
        let estimation_result:number;

        try{
            estimation_result = this.ml_estimator.GetMaximumLikelihoodEstimation(ResponsePattern, ItemDifficulties);
        }
        catch(e){
            //override ability estimation when only one item has been answered yet
            if(ResponsePattern.length == 1){
            //Response 0
            if(ResponsePattern[0] == 0){
                estimation_result = -10;
            }
            //Response 1
            else{
                estimation_result = +10;
            }
        }
        }
        

        

        return estimation_result!;
    }
}