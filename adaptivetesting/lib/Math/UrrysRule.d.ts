import { TestItem } from "../Models/TestItem";
/**
 * This function uses Urry's Rule to find the next Item
 * For each item, the difference to the initial ability level is calculated
 * and the item is selected of which the difference is minimized.
 * @param items
 * @param ability
 * @return Minimum Difficulty
 */
export declare function UrrysRule(items: TestItem[], ability: number): TestItem;
