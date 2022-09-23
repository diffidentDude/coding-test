import { Direction } from "../types";

export const parseDirection = (rawStringDirection: string): Direction => {
    const stringDirection = rawStringDirection.toUpperCase();
    switch (stringDirection) {
        case "NORTH":
            return Direction.NORTH;
        case "EAST":
            return Direction.EAST;
        case "SOUTH":
            return Direction.SOUTH;
        case "WEST":
            return Direction.WEST;
    }
    return Direction.NORTH;
}

export default parseDirection;