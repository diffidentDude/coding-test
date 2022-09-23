import { expect } from "chai";
import { Direction } from "../types";
import { left } from "./left";

describe("left", () => {
    describe("when the robot is facing NORTH, and it is asked to turn left", () => {
        it('should end up facing WEST', () => {
            const robot = left({ position: [0, 0], direction: Direction.NORTH });
            expect(robot.direction).to.equal(Direction.WEST);
        });
    });   
    describe("when the robot is facing EAST, and it is asked to turn left", () => {
        it('should end up facing NORTH', () => {
            const robot = left({ position: [0, 0], direction: Direction.EAST });
            expect(robot.direction).to.equal(Direction.NORTH);
        });
    });    
    describe("when the robot is facing SOUTH, and it is asked to turn left", () => {
        it('should end up facing EAST', () => {
            const robot = left({ position: [0, 0], direction: Direction.SOUTH });
            expect(robot.direction).to.equal(Direction.EAST);
        });
    });   
    describe("when the robot is facing WEST, and it is asked to turn left", () => {
        it('should end up facing SOUTH', () => {
            const robot = left({ position: [0, 0], direction: Direction.WEST });
            expect(robot.direction).to.equal(Direction.SOUTH);
        });
    });   
});