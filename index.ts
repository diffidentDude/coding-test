
import * as readline from 'readline'
import { left } from './commands/left';
import { move } from './commands/move';
import { place } from './commands/place';
import { report } from './commands/report';
import { right } from './commands/right';
import { Robot } from './types';
import { parseDirection } from './utils/parseDirection';

let robot: Robot | undefined;

const ask = (robot: Robot | undefined) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    rl.setPrompt('Waiting for a command: ')
    rl.prompt();

    rl.on('line', ans => {
        // We can execute these commands if the robot is positioned. Otherwise we can ignore them
        const match = ans.match(/^PLACE\s+([0-9]+),([0-9]+),([A-Z]+)$/);
        if (match && match.length > 3) {
            const [_, rawX, rawY, direction] = match;
            const x = parseInt(rawX);
            const y = parseInt(rawY);
            robot = place([x, y], parseDirection(direction));
        } else if (typeof robot !== 'undefined') {
            switch (ans) {
                case "MOVE":
                    robot = move(robot);
                    break;
                case "LEFT":
                    robot = left(robot);
                    break;
                case "RIGHT":
                    robot = right(robot);
                    break;
                case "REPORT":
                    report(robot);
                    break;
            }
        }
        rl.prompt();
    })
}

ask(robot);

