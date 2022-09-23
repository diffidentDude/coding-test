import { Direction, Position, Robot } from "../types";
import { validate } from "../utils/validate";

export const place = (position: Position, direction: Direction): Robot | undefined => {
    if (validate(position)) {
        return { direction, position };
    }
}

export default place;