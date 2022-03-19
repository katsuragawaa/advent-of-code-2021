import { once } from 'events';
import { createReadStream } from 'fs';
import { createInterface } from 'readline';

async function partOne() {
  try {
    const rl = createInterface({
      input: createReadStream('input.txt'),
      crlfDelay: Infinity,
    });

    let horizontalPosition = 0;
    let depth = 0;

    rl.on('line', (line) => {
      const [direction, dist] = line.split(' ');
      const distance = parseInt(dist);

      if (direction == 'forward') {
        horizontalPosition += distance;
      } else {
        direction == 'up' ? (depth -= distance) : (depth += distance);
      }
    });

    await once(rl, 'close');
    console.log(horizontalPosition * depth);
  } catch (err) {
    console.error(err);
  }
}

async function partTwo() {
  try {
    const rl = createInterface({
      input: createReadStream('input.txt'),
      crlfDelay: Infinity,
    });

    let horizontalPosition = 0;
    let depth = 0;
    let aim = 0;

    rl.on('line', (line) => {
      let [orientation, value]: Array<number | string> = line.split(' ');
      value = parseInt(value);

      if (orientation == 'forward') {
        horizontalPosition += value;
        depth += aim * value;
      } else {
        orientation == 'up' ? (aim -= value) : (aim += value);
      }
    });

    await once(rl, 'close');
    console.log(horizontalPosition * depth);
  } catch (err) {
    console.error(err);
  }
}

partOne();
partTwo();
