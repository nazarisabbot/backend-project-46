#!/usr/bin/env node
import { Command } from 'commander';
import runComparisonFiles from '../src/index.js';

const program = new Command();
program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .action((filePath1, filePath2, options) => {
    const strDiff = runComparisonFiles(filePath1, filePath2, options);
    console.log(strDiff);
  })
  .option('-f, --format [type]', 'output format', 'stylish');

program.parse(process.argv);
