import { MaximumLikelihoodEstimator } from "../Math/MaximumLikelihoodEstimator";
import { TestItem } from "./TestItem";
import { UrrysRule } from "../Math/UrrysRule";
import { StandardError } from "../Math/StandardError";
import { TestItems } from "../Data/Items";



export class AdaptiveTest {
    /**
     * Item pool
     * @description Please remove all used test items from the item pool
     * after they have been shown to a participant.
     */
    public Items: TestItem[];
    public MLEstimator: MaximumLikelihoodEstimator;
    /**
     * This array shall save all used items.
     */
    public AnsweredItems: Array<TestItem> = [];

    //parameters
    public ResponsePattern: number[] = [];
    public AbilityLevel: number;

    //difficulties of answered items
    /**
     * The item difficulties array is dynamically calculated from Answered Items.
     */
    public get ItemDifficulties(): number[] {
        const dif: number[] = [];
        this.AnsweredItems.forEach((item) => {
            dif.push(item.Difficulty);
        });

        return dif;
    }

    /**
     * Standard Error of Measurement for the estimated latent ability.
     */
    public get AbilitySE(): number {
        return StandardError(this.AnsweredItems, this.AbilityLevel);
    }

    /**
     * The constrctor creates an instance of MaximumLikelihoodEstimator
     * and loads the test items.
     * Also, the ability level is set.
     * @param initialAbilityLevel - default value: 0
     */
    public constructor(initialAbilityLevel: number = 0) {
        this.AbilityLevel = initialAbilityLevel;

        //create Esimators
        this.MLEstimator = new MaximumLikelihoodEstimator();
        //load test items
        this.Items = TestItems;
    }


    //#region General Test Procedure
    /**
     * This function finds the first Item for the test by using Urry's rule.
     * For each item, the difference to the initial ability level is calculated
     * and the item is selected of which the difference is minimized.
     * @see GetNextItem
     * @return TestItem
     * @deprecated
     */
    public GetFirstItem(): TestItem {
        return this.GetNextItem();
    }

    /**
     * This function finds the next Item for the test by using Urry's rule.
     * For each item, the difference to the initial ability level is calculated
     * and the item is selected of which the difference is minimized.
     * @return TestItem
     */

    public GetNextItem(): TestItem {
        //use urrys rule
        const item: TestItem = UrrysRule(this.Items, this.AbilityLevel);
        return item;
    }

    /**
     * This function checks if the stop condition is met.
     * If the Condition is met, the function returns true.
     * The test will stop when the standard error is < 0.3.
     * 
     */
    public StopTestCondition() {
        if (this.AbilitySE < 0.3) {
            return true;

        }
        else {
            return false;
        }
    }

    //#endregion

}