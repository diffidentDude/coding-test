export interface Robot {
    position: Position;
    direction: Direction;
}

// 0 1 2 3
// 
export enum Direction {
    EAST, SOUTH, WEST, NORTH
}

// x, y
export type Position = Array<number>;