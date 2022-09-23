import { Direction, Robot } from "../types";

const turnLeft = (direction) => direction > 0 ? direction - 1 : Object.keys(Direction).length / 2 - 1;

export const left = ({ direction, position }: Robot): Robot => ({ position, direction: turnLeft(direction) });

export default left;