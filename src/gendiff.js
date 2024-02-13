import { Command } from 'commander';
import path from 'path';
import comparisonFlatFiles from './json/comparisonFlatFiles.js';

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
    const absolutePath1 = path.resolve(process.cwd(), filePath1);
    const absolutePath2 = path.resolve(process.cwd(), filePath2);

    const fileExtension1 = path.extname(absolutePath1).toLocaleLowerCase();
    const fileExtension2 = path.extname(absolutePath2).toLocaleLowerCase();

    if (fileExtension1 === fileExtension2 && fileExtension1 === '.json') {
      const result = comparisonFlatFiles(absolutePath1, absolutePath2);
      console.log(result);
    } else {
      throw new Error('Files have different extensions');
    }
  })
  .option('-f, --format [type]', 'output format');

program.parse(process.argv);
