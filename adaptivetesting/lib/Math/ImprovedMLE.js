"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImprovedMLE = void 0;
class ImprovedMLE {
    ItemDifficulties;
    ResponsePattern;
    constructor(ResponsePattern, ItemDifficulties) {
        this.ResponsePattern = ResponsePattern;
        this.ItemDifficulties = ItemDifficulties;
    }
    LikelihoodFunction(Ability) {
        let l = 1;
        for (let i = 0; i < this.ResponsePattern.length; i++) {
            const up = Math.exp(this.ResponsePattern[i] * (Ability - this.ItemDifficulties[i]));
            const low = 1 + Math.exp(Ability - this.ItemDifficulties[i]);
            const item_term = up / low;
            //update l
            l = l * item_term;
        }
        return l;
    }
    /**
     * FindMax
     */
    FindMax() {
        return this.Step1();
    }
    Step1() {
        let previ_abil = -10;
        let prev_lik = Number.NEGATIVE_INFINITY;
        for (let ability = previ_abil; ability <= +10; ability = ability + 0.1) {
            const calculated_likelihood = this.LikelihoodFunction(ability);
            if (calculated_likelihood <= prev_lik) {
                return this.Step2(ability);
            }
            else {
                //update lik
                prev_lik = calculated_likelihood;
                previ_abil = ability;
            }
        }
        throw new Error("Algorithm did not converge.");
    }
    Step2(last_max_ability) {
        let prev_lik = Number.NEGATIVE_INFINITY;
        let previ_abil = last_max_ability;
        for (let ability = last_max_ability; ability > last_max_ability - 1; ability = ability - 0.01) {
            const calculated_likelihood = this.LikelihoodFunction(ability);
            if (calculated_likelihood <= prev_lik) {
                return this.Step3(ability);
            }
            else {
                //update lik
                prev_lik = calculated_likelihood;
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                previ_abil = ability;
            }
        }
        throw new Error("Algorithm did not converge.");
    }
    Step3(last_max_ability) {
        let previ_abil = last_max_ability;
        let prev_lik = Number.NEGATIVE_INFINITY;
        for (let ability = last_max_ability; ability <= ability + 0.5; ability = ability + 0.001) {
            const calculated_likelihood = this.LikelihoodFunction(ability);
            if (calculated_likelihood <= prev_lik) {
                return previ_abil;
            }
            else {
                //update lik
                prev_lik = calculated_likelihood;
                previ_abil = ability;
            }
        }
        throw new Error("Algorithm did not converge.");
    }
}
exports.ImprovedMLE = ImprovedMLE;
