import { describe, expect, test } from "@jest/globals";
import { UrrysRule } from "../Math/UrrysRule";
import { TestItem } from "../Models/TestItem";
import { OldTestItems } from "../Data/OldItems";

describe("Urrys Rule", () => {

    

    const item1 = new TestItem();
    item1.Difficulty = 0.24;
    item1.word = "A";


    const item2 = new TestItem();
    item2.Difficulty = 0.89;
    item2.word = "B";


    const item3 = new TestItem();
    item3.Difficulty = -0.6;
    item3.word = "C";

    const items: TestItem[] = [
        item1, item2, item3
    ];
    
    
    test("Selection of item when ability level is 0.", () => {
        const ability_level = 0;
        
        expect(UrrysRule(items, ability_level)).toEqual(item1);
    });

    test("Selection of item when ability level is -0.5", () =>{
        const ability_level = -0.5;
        expect(UrrysRule(items, ability_level)).toEqual(item3);
    });

    test("catR test", () =>{
        const ability_level = -2.239;


        expect(UrrysRule(OldTestItems, ability_level).Difficulty).toBeCloseTo( -2.2309);
    });

    test("Tonne vs Zange", () =>{
        const ability_level = 4;

        expect(UrrysRule(OldTestItems, ability_level).word).toBe("Tonne");
    });
    
    test("Frisur test", () =>{
        const ability_level = 3.13;
        const result = UrrysRule(OldTestItems, ability_level);

        expect(result.word).toBe("Frisur");
    });
});