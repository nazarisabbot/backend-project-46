#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')

program
  .option('-h, --help', 'output usage information')

program.parse(process.argv);

const options = program.opts();

if (options.version) {
  console.log('Version: 1.0.0');
}

if (options.help) {
  program.outputHelp();
}
