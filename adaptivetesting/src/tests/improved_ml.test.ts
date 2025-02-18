import { ImprovedMLE } from "../Math/ImprovedMLE";
import { describe, test, expect , jest} from "@jest/globals";

describe("Improved ML", () => {
    test("Calculate likelihood", () => {
        const ResponsePattern = [0, 1, 0];
        const ItemDifficulties = [0.7, 0.9, 0.6];
        
        const estimator = new ImprovedMLE(ResponsePattern, ItemDifficulties);

        

        expect(estimator.LikelihoodFunction(0))
            .toBeCloseTo(0.1247020);
    });


    test("Find and calculate MLE for test data", () => {
        const ResponsePattern = [0, 1, 0];
        const ItemDifficulties = [0.7, 0.9, 0.6];
        
        const estimator = new ImprovedMLE(ResponsePattern, ItemDifficulties);

        

        //For this dataset, the maximum of the likelihood function
        //should be 0.12476 with an ability level of 0.0375530712.
        //(Calculated with WolframAlpha and Geogebra)


        expect(estimator.FindMax())
            .toBeCloseTo(0.0375530712, 2);
    });


    test("One item", () =>{
        const estimator = new ImprovedMLE([0], [0.3]);
        
        expect(jest.fn(() => estimator.FindMax())).toThrowError();
    });


    test("Result test Eid 4.26", () => {
        const ResponsePattern = [1, 0];
        const ItemDifficulties = [-1.603, 0.909];
        const estimator = new ImprovedMLE(ResponsePattern, ItemDifficulties);
        

        expect(estimator.FindMax()).toBeCloseTo(-0.347);
    });

    test("catR item 1 and 2", () => {
        const ResponsePattern = [1, 0];
        const ItemDifficulties = [-2.1851, -0.2897194];
        const estimator = new ImprovedMLE(ResponsePattern, ItemDifficulties);
        

        const result = estimator.FindMax();

        expect(result).toBeCloseTo(-1.237413);
    });
});