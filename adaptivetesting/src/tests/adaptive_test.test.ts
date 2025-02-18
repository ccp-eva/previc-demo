import { describe, expect, test } from "@jest/globals";
import * as ad from "../Models/AdaptiveTest";
import { OldTestItems } from "../Data/OldItems";


class AdaptiveTest extends ad.AdaptiveTest{
    public constructor(initialAbiityLevel:number = 0){
        super(initialAbiityLevel);
        this.Items = OldTestItems;
        
    }
}

describe("Adaptive test", () => {

    test("Selection of first test item", async () => {
        const adaptiveTest = new AdaptiveTest();
        const selectedItem = adaptiveTest.GetFirstItem();

        
        const items = OldTestItems;
        const expected_item = items.find((item) => {
            if (item.word == "weiblich") {
                return item;
            }
        });

        expect(selectedItem).toEqual(expected_item);

    });

    describe("Selection of next item", ()=>{
        test("Ability level is positive and equal to an item difficulty", async () => {
            const adaptiveTest = new AdaptiveTest(0.9618);
            const selectedItem = adaptiveTest.GetNextItem();
    
            
            const items = OldTestItems;
            const expected_item = items.find((item) => {
                if (item.Difficulty == 0.9618) {
                    return item;
                }
            });
    
            expect(selectedItem).toEqual(expected_item);
        });

        test("Ability level is positive and close to an item difficulty", async () => {
            const adaptiveTest = new AdaptiveTest(0.96);
            const selectedItem = adaptiveTest.GetNextItem();
    
            
            const items = OldTestItems;
            const expected_item = items.find((item) => {
                if (item.Difficulty == 0.9618) {
                    return item;
                }
            });
    
            expect(selectedItem).toEqual(expected_item);
        });


        test("Ability level is negative and equal to an item difficulty", async () => {
            const adaptiveTest = new AdaptiveTest(-1.1303);
            const selectedItem = adaptiveTest.GetNextItem();
    
            
            const items = OldTestItems;
            const expected_item = items.find((item) => {
                if (item.Difficulty == -1.1303) {
                    return item;
                }
            });
    
            expect(selectedItem).toEqual(expected_item);
        });
    
        test("Ability level is negative and close to an item difficulty", async () => {
            const adaptiveTest = new AdaptiveTest(-1.13);
            const selectedItem = adaptiveTest.GetNextItem();
    
            
            const items = OldTestItems;
            const expected_item = items.find((item) => {
                if (item.Difficulty == -1.1303) {
                    return item;
                }
            });
    
            expect(selectedItem).toEqual(expected_item);
        });
    });
});