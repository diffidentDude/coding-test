import { Direction, Robot } from "../types";

const turnRight = (direction) => direction < Object.keys(Direction).length / 2 - 1 ? direction + 1 : 0;

export const right = ({ direction, position }: Robot): Robot => ({ position, direction: turnRight(direction) });

export default right;