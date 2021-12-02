import {Solution} from "./types";

interface Command {
    type: "forward" | "up" | "down";
    value: number;
}

const inputToCommands = (input: string): Command[] => {
    return input.split("\n").map((line) => {
        const [type, value] = line.split(" ");
        return {type: type as any, value: Number(value)};
    });
};

export const day02a: Solution = (input: string): string => {
    const [horizontal, vertical] = calculateFinalPosition(
        inputToCommands(input),
    );
    return String(horizontal * vertical);
};

export const day02b: Solution = (input: string): string => {
    const [horizontal, vertical] = calculateFinalPositionWithAim(
        inputToCommands(input),
    );
    return String(horizontal * vertical);
};

const calculateFinalPosition = (commands: Command[]): [number, number] => {
    let horizontal = 0;
    let vertical = 0;
    for (const command of commands) {
        if (command.type === "forward") {
            horizontal += command.value;
        } else if (command.type === "down") {
            vertical += command.value;
        } else if (command.type === "up") {
            vertical -= command.value;
        }
    }
    return [horizontal, vertical];
};

const calculateFinalPositionWithAim = (
    commands: Command[],
): [number, number] => {
    let horizontal = 0;
    let vertical = 0;
    let aim = 0;
    for (const command of commands) {
        if (command.type === "forward") {
            horizontal += command.value;
            vertical += aim * command.value;
        } else if (command.type === "down") {
            aim += command.value;
        } else if (command.type === "up") {
            aim -= command.value;
        }
    }
    return [horizontal, vertical];
};
