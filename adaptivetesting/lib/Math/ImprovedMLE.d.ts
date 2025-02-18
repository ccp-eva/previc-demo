export declare class ImprovedMLE {
    ItemDifficulties: number[];
    ResponsePattern: number[];
    constructor(ResponsePattern: number[], ItemDifficulties: number[]);
    LikelihoodFunction(Ability: number): number;
    /**
     * FindMax
     */
    FindMax(): number;
    Step1(): number;
    Step2(last_max_ability: number): number;
    Step3(last_max_ability: number): number;
}
