import { Adder } from './Adder';
import chalk from 'chalk';
import now from 'performance-now';

console.log(`${chalk.blue('Hello world!')} I am debuggable in VSCode`);

var start = now();
console.log(`I can add 5 + 3 = ${Adder.add(5, 3)}!`);
var end = now();
console.log(`${chalk.red('That took: ')} ${(end - start).toFixed(3)} ms 🔥`);
