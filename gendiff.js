#!/usr/bin/env node
import { Command } from 'commander';
import parseFileJson from './modules/json/parseJson.js';
import comparisonFlatFiles from './modules/json/comparisonFlatFiles.js';
import path from 'path';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .option('-h, --help', 'output usage information')
  .action((filepath1, filepath2) => {
    const relativePath1 = filepath1;
    const relativePath2 = filepath2;

    const absolutePath1 = path.resolve(process.cwd(), relativePath1);
    const absolutePath2 = path.resolve(process.cwd(), relativePath2);

    const fileExtension1 = path.extname(absolutePath1).toLocaleLowerCase();
    const fileExtension2 = path.extname(absolutePath2).toLocaleLowerCase();

    if (fileExtension1 === fileExtension2 && fileExtension1 === '.json') {
      const data1 = parseFileJson(absolutePath1)
      const data2 = parseFileJson(absolutePath2)
      const result = comparisonFlatFiles(data1, data2);
      console.log(result);
    } else {
      throw new Error('Files have different extensions');
    }
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
