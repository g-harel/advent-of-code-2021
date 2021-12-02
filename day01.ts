import {inputToInts} from "./lib";
import {Solution} from "./types";

export const day01a: Solution = (input: string): string => {
    return String(countWindowIncreases(inputToInts(input), 1));
};

export const day01b: Solution = (input: string): string => {
    return String(countWindowIncreases(inputToInts(input), 3));
};

const countWindowIncreases = (values: number[], window: number): number => {
    let count = 0;
    for (let i = window; i < values.length; i++) {
        // Only compare values at edges (not overlapping).
        if (values[i] > values[i-window]) count++;
    }
    return count;
};
