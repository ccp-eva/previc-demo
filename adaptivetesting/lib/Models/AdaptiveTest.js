"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdaptiveTest = void 0;
const MaximumLikelihoodEstimator_1 = require("../Math/MaximumLikelihoodEstimator");
const UrrysRule_1 = require("../Math/UrrysRule");
const StandardError_1 = require("../Math/StandardError");
const Items_1 = require("../Data/Items");
class AdaptiveTest {
    /**
     * Item pool
     * @description Please remove all used test items from the item pool
     * after they have been shown to a participant.
     */
    Items;
    MLEstimator;
    /**
     * This array shall save all used items.
     */
    AnsweredItems = [];
    //parameters
    ResponsePattern = [];
    AbilityLevel;
    //difficulties of answered items
    /**
     * The item difficulties array is dynamically calculated from Answered Items.
     */
    get ItemDifficulties() {
        const dif = [];
        this.AnsweredItems.forEach((item) => {
            dif.push(item.Difficulty);
        });
        return dif;
    }
    /**
     * Standard Error of Measurement for the estimated latent ability.
     */
    get AbilitySE() {
        return (0, StandardError_1.StandardError)(this.AnsweredItems, this.AbilityLevel);
    }
    /**
     * The constrctor creates an instance of MaximumLikelihoodEstimator
     * and loads the test items.
     * Also, the ability level is set.
     * @param initialAbilityLevel - default value: 0
     */
    constructor(initialAbilityLevel = 0) {
        this.AbilityLevel = initialAbilityLevel;
        //create Esimators
        this.MLEstimator = new MaximumLikelihoodEstimator_1.MaximumLikelihoodEstimator();
        //load test items
        this.Items = Items_1.TestItems;
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
    GetFirstItem() {
        return this.GetNextItem();
    }
    /**
     * This function finds the next Item for the test by using Urry's rule.
     * For each item, the difference to the initial ability level is calculated
     * and the item is selected of which the difference is minimized.
     * @return TestItem
     */
    GetNextItem() {
        //use urrys rule
        const item = (0, UrrysRule_1.UrrysRule)(this.Items, this.AbilityLevel);
        return item;
    }
    /**
     * This function checks if the stop condition is met.
     * If the Condition is met, the function returns true.
     * The test will stop when the standard error is < 0.3.
     *
     */
    StopTestCondition() {
        if (this.AbilitySE < 0.3) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.AdaptiveTest = AdaptiveTest;
