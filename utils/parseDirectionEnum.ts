import { Direction } from "../types";

const DIRECTIONS = ["EAST", "SOUTH", "WEST", "NORTH"];

export const parseDirectionEnum = (enumDirection: Direction): string => {
    return DIRECTIONS[enumDirection];
}

export default parseDirectionEnum;