import { Position } from "../types"

const BOUNDS = [5, 5];

export const validate = (position: Position) => {
    return position.every((pos, index) => [greaterThanN(-1), lessThanN(BOUNDS[index])].every((fn) => fn(pos)))
}

const greaterThan = (x: number, x2: number): boolean => x > x2;
const greaterThanN = (x2: number) => (x: number) => greaterThan(x, x2);
const lessThan = (x: number, x2: number): boolean => x < x2;
const lessThanN = (x2: number) => (x: number) => lessThan(x, x2);

export default validate;
