import { once } from 'events';
import { createReadStream } from 'fs';
import { createInterface } from 'readline';

async function partOne() {
  try {
    const rl = createInterface({
      input: createReadStream('input.txt'),
      crlfDelay: Infinity,
    });

    const depths: number[] = [];
    let counter = 0;

    rl.on('line', (line) => {
      const currentDepth = parseInt(line);
      const previousDepth = depths.at(-1);
      depths.push(currentDepth);

      if (depths.length === 1) return;

      if (currentDepth > previousDepth) counter++;
    });

    await once(rl, 'close');
    console.log(counter);
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

    const depths: number[] = [];
    const slidingWindows: number[][] = [];
    let counter = 0;

    rl.on('line', (line) => {
      const currentWindow = [parseInt(line), depths.at(-1), depths.at(-2)];
      depths.push(parseInt(line));

      if (depths.length < 3) return;

      const previousWindow = slidingWindows.at(-1);
      slidingWindows.push(currentWindow);
      if (slidingWindows.length === 1) return;

      if (sum(currentWindow) > sum(previousWindow)) counter++;
    });

    await once(rl, 'close');
    console.log(counter);
  } catch (err) {
    console.error(err);
  }
}

function sum(arr: number[]) {
  return arr.reduce((acc, number) => acc + number, 0);
}

partOne();
partTwo();
