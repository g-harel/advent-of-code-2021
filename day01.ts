import {Solution} from "./types";

const inputToInts = (input: string): number[] => {
    return input.split("\n").map(Number);
};

export const day01a: Solution = (input: string): string => {
    const [a, b] = findSumPair(2020, inputToInts(input));
    return String(a * b);
};

export const day01b: Solution = (input: string): string => {
    const [a, b, c] = findSumTriplet(2020, inputToInts(input));
    return String(a * b * c);
};

const findSumPair = (target: number, values: number[]): [number, number] => {
    const seen: Record<number, boolean> = {};
    for (const value of values) {
        const missing = target - value;
        if (seen[missing]) {
            return [missing, value];
        }
        seen[value] = true;
    }
    throw "Not found";
};

const findSumTriplet = (
    target: number,
    values: number[],
): [number, number, number] => {
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        const remainingValues = values.slice();
        remainingValues.splice(i, 1);
        try {
            const [a, b] = findSumPair(target - value, remainingValues);
            return [value, a, b];
        } catch (e) {
            continue;
        }
    }
    throw "Not found";
};
