import { expect } from "chai";
import { Direction } from "../types";
import { move } from "./move";

describe("move", () => {
    describe("when a robot is facing NORTH", () => {
        const direction = Direction.NORTH;
        describe("and has space in front to move", () => {
            let robot = { position: [0, 0], direction };
            describe("and we ask the robot to move", () => {
                beforeEach(() => {
                    robot = move(robot);
                });
                it("should move the robot one position on the y axis", () => {
                    expect(robot.position[1]).to.equal(1);
                });
            });
        });
        describe("and doesn't have space to move", () => {
            let robot = { position: [0, 4], direction: Direction.NORTH };
            describe("and we ask the robot to move", () => {
                beforeEach(() => {
                    robot = move(robot);
                });
                it("should not move the robot", () => {
                    expect(robot.position[1]).to.equal(4);
                });
            });
        });
    });
    describe("when a robot is facing SOUTH", () => {
        const direction = Direction.SOUTH;
        describe("and has space in front to move", () => {
            let robot = { position: [0, 4], direction };
            describe("and we ask the robot to move", () => {
                beforeEach(() => {
                    robot = move(robot);
                });
                it("should move the robot one position on the y axis", () => {
                    expect(robot.position[1]).to.equal(3);
                });
            });
        });
        describe("and doesn't have space to move", () => {
            let robot = { position: [0, 0], direction };
            describe("and we ask the robot to move", () => {
                beforeEach(() => {
                    robot = move(robot);
                });
                it("should not move the robot", () => {
                    expect(robot.position[1]).to.equal(0);
                });
            });
        });
    });

    describe("when a robot is facing EAST", () => {
        const direction = Direction.EAST;
        describe("and has space in front to move", () => {
            let robot = { position: [4, 0], direction };
            describe("and we ask the robot to move", () => {
                beforeEach(() => {
                    robot = move(robot);
                });
                it("should move the robot one position on the y axis", () => {
                    expect(robot.position[0]).to.equal(3);
                });
            });
        });
        describe("and doesn't have space to move", () => {
            let robot = { position: [0, 0], direction };
            describe("and we ask the robot to move", () => {
                beforeEach(() => {
                    robot = move(robot);
                });
                it("should not move the robot", () => {
                    expect(robot.position[0]).to.equal(0);
                });
            });
        });
    });

    describe("when a robot is facing WEST", () => {
        const direction = Direction.WEST;
        describe("and has space in front to move", () => {
            let robot = { position: [0, 0], direction };
            describe("and we ask the robot to move", () => {
                beforeEach(() => {
                    robot = move(robot);
                });
                it("should move the robot one position on the y axis", () => {
                    expect(robot.position[0]).to.equal(1);
                });
            });
        });
        describe("and doesn't have space to move", () => {
            let robot = { position: [4, 0], direction };
            describe("and we ask the robot to move", () => {
                beforeEach(() => {
                    robot = move(robot);
                });
                it("should not move the robot", () => {
                    expect(robot.position[0]).to.equal(4);
                });
            });
        });
    });
});