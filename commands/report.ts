import { Robot } from "../types"
import { parseDirectionEnum } from "../utils/parseDirectionEnum"

export const report = (robot: Robot) => {
    console.log(`X: ${robot.position[0]} Y: ${robot.position[1]} DIRECTION: ${parseDirectionEnum(robot.direction)}`)
}

export default report;