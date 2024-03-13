import { Command } from 'commander';
import comparisonFiles from './comparisonFiles.js';
import formatter from './formatters/index.js';

const program = new Command();
program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .action((filePath1, filePath2, options) => {
    if (!filePath1 || !filePath2) {
      program.outputHelp();
      return;
    }

    const result = comparisonFiles(filePath1, filePath2);

    const { format } = options;
    const formattedDiff = formatter(result, format);
    console.log(formattedDiff);
  })
  .option('-f, --format [type]', 'output format', 'stylish');

program.parse(process.argv);
