import { Robot } from "../types";
import { validate } from "../utils/validate";

export const move = ({ position, direction }: Robot): Robot => {
    // 0 and 2 are x axis, 1 and 3 are y axis
    const index = direction % 2;
    // first two move in the negative direction, second two in the positive direction
    const sign = direction <= 1 ? -1 : 1;
    const proposal = [...position];
    proposal[index] = proposal[index] + sign;
    if (validate(proposal)) {
        return { direction, position: proposal };
    }
    return { position, direction };
}

export default move;
