export interface Solution {
    (input: string): string;
}

export const verify = (a: Solution, b: Solution) => (answer: string) => {
    const [answers, sample, input] = answer.trim().split("\n\n");

    const [aAnswers, bAnswers] = answers.split("\n");
    const [aSampleAnswer, aAnswer] = aAnswers.split(" ");
    const [bSampleAnswer, bAnswer] = bAnswers.split(" ");

    test("a sample", () => expect(a(sample.trim())).toBe(aSampleAnswer));
    test("a", () => expect(a(input.trim())).toBe(aAnswer));
    test("b sample", () => expect(b(sample.trim())).toBe(bSampleAnswer));
    test("b", () => expect(b(input.trim())).toBe(bAnswer));
};

export const inputToInts = (input: string): number[] => {
    return input.split("\n").map(Number);
};
