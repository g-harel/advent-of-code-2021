export const inputToInts = (input: string): number[] => {
    return input.split("\n").map(Number);
};
