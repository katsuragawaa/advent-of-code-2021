import { once } from 'events';
import { createReadStream } from 'fs';
import { createInterface } from 'readline';

async function processLineByLine() {
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

processLineByLine();
