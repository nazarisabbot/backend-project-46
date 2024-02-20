import { Command } from 'commander';
import comparisonFlatFiles from './comparisonFlatFiles.js';

const program = new Command();
program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .action((filePath1, filePath2) => {
    if (!filePath1 || !filePath2) {
      program.outputHelp();
      return;
    }

    const result = comparisonFlatFiles(filePath1, filePath2);
    console.log(result);
  })
  .option('-f, --format [type]', 'output format');

program.parse(process.argv);
