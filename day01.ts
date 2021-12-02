import {Solution} from "./types";

const inputToInts = (input: string): number[] => {
    return input.split("\n").map(Number);
};

export const day01a: Solution = (input: string): string => {
    return String(countIncreases(inputToInts(input)));
};

export const day01b: Solution = (input: string): string => {
    return "";
};

const countIncreases = (values: number[]): number => {
    let curr = 0;
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] > curr) count++;
        curr = values[i];
    }
    return count - 1; // Remove initial.
};
