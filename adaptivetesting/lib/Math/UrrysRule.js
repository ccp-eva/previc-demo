"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrrysRule = void 0;
/**
 * This function uses Urry's Rule to find the next Item
 * For each item, the difference to the initial ability level is calculated
 * and the item is selected of which the difference is minimized.
 * @param items
 * @param ability
 * @return Minimum Difficulty
 */
function UrrysRule(items, ability) {
    //create difference array from absolute value
    const difference = [];
    items.forEach((item) => {
        difference.push(Math.abs(ability - item.Difficulty));
    });
    //get minimal difference
    const minimalDifference = Math.min(...difference);
    //find item where minimal difference is equal to absolut value of difference
    const item = items.find((item) => {
        if (Math.abs(ability - item.Difficulty) == minimalDifference) {
            //console.debug("Found next item");
            return item;
        }
        else {
            //console.debug("Next item not yet found.");
        }
    });
    return item;
}
exports.UrrysRule = UrrysRule;
