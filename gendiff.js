#!/usr/bin/env node
import { Command } from 'commander';
import parseFile from './parse.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .option('-h, --help', 'output usage information')
  .action((filepath1, filepath2) => {
    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);
    console.log('Data from file 1:', data1);
    console.log('Data from file 2:', data2);
  })
  
  

program.parse(process.argv);

const options = program.opts();

if (options.version) {
  console.log('Version: 1.0.0');
}

if (options.help) {
  program.outputHelp();
}

// const [filepath1, filepath2] = program.args;
// console.log('filepath1:', filepath1);
// console.log('filepath2:', filepath2);
