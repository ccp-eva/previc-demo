import { MaximumLikelihoodEstimator } from "../Math/MaximumLikelihoodEstimator";
import { TestItem } from "./TestItem";
export declare class AdaptiveTest {
    /**
     * Item pool
     * @description Please remove all used test items from the item pool
     * after they have been shown to a participant.
     */
    Items: TestItem[];
    MLEstimator: MaximumLikelihoodEstimator;
    /**
     * This array shall save all used items.
     */
    AnsweredItems: Array<TestItem>;
    ResponsePattern: number[];
    AbilityLevel: number;
    /**
     * The item difficulties array is dynamically calculated from Answered Items.
     */
    get ItemDifficulties(): number[];
    /**
     * Standard Error of Measurement for the estimated latent ability.
     */
    get AbilitySE(): number;
    /**
     * The constrctor creates an instance of MaximumLikelihoodEstimator
     * and loads the test items.
     * Also, the ability level is set.
     * @param initialAbilityLevel - default value: 0
     */
    constructor(initialAbilityLevel?: number);
    /**
     * This function finds the first Item for the test by using Urry's rule.
     * For each item, the difference to the initial ability level is calculated
     * and the item is selected of which the difference is minimized.
     * @see GetNextItem
     * @return TestItem
     * @deprecated
     */
    GetFirstItem(): TestItem;
    /**
     * This function finds the next Item for the test by using Urry's rule.
     * For each item, the difference to the initial ability level is calculated
     * and the item is selected of which the difference is minimized.
     * @return TestItem
     */
    GetNextItem(): TestItem;
    /**
     * This function checks if the stop condition is met.
     * If the Condition is met, the function returns true.
     * The test will stop when the standard error is < 0.3.
     *
     */
    StopTestCondition(): boolean;
}
