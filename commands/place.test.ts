import { expect } from "chai";
import { Direction } from "../types";
import { place } from "./place";

describe("place", () => {
    describe("when it is given a valid position, facing NORTH", () => {
        let robot;
        beforeEach(() => {
            robot = place([0,0], Direction.NORTH);
        });
        it("should return a robot in the position", () => {
            expect(robot.position).to.deep.equal([0,0]);
        });
        it("should return a robot facing NORTH", () => {
            expect(robot.direction).to.equal(Direction.NORTH);
        });
    });
    describe("when it is given an invalid position, facing NORTH", () => {
        let robot;
        beforeEach(() => {
            robot = place([10,0], Direction.NORTH);
        });
        it("should not return a robot", () => {
            expect(robot).to.be.an('undefined')
        });
    });
});