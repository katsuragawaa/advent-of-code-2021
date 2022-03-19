import { once } from 'events';
import { createReadStream } from 'fs';
import { createInterface } from 'readline';

async function readFile() {
  const rl = createInterface({
    input: createReadStream('input.txt'),
    crlfDelay: Infinity,
  });

  const input: string[] = [];

  rl.on('line', (line) => {
    input.push(line);
  });

  await once(rl, 'close');
  return input;
}

async function partOne() {
  const report = await readFile();
  const zeroBitsOnIndex = {};
  for (let r = 0; r < report.length; r++) {
    for (let i = 0; i < report[r].length; i++) {
      if (report[r][i] === '1') continue;

      if (zeroBitsOnIndex[i]) {
        zeroBitsOnIndex[i]++;
      } else {
        zeroBitsOnIndex[i] = 1;
      }
    }
  }

  let gammaBits: string = '';
  let epsilonBits: string = '';
  Object.keys(zeroBitsOnIndex).forEach((index) => {
    if (zeroBitsOnIndex[index] > report.length / 2) {
      gammaBits += '0';
      epsilonBits += '1';
    } else {
      gammaBits += '1';
      epsilonBits += '0';
    }
  });

  const gamma = parseInt(gammaBits, 2);
  const epsilon = parseInt(epsilonBits, 2);
  console.log(gamma * epsilon);
}

partOne();
