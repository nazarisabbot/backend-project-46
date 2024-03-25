import sortedKeys from './sortedKeys.js';

import generateDiffAbstraction from '../generateDiff.js';
import fs from 'fs';
import parseFile from '../parser/parser.js';

const path1 = './temp/file1.json';
const path2 = './temp/file2.json';

const firstData = fs.readFileSync(path1, 'utf-8');
const secondData = fs.readFileSync(path2, 'utf-8');

const data1 = generateDiffAbstraction(parseFile(firstData, 'json'), parseFile(secondData, 'json'));

const formatStylish = (data) => {
  const createLayOut = (arr, depth) => {
    const sortedData = sortedKeys(arr);

    return sortedData.map((item) => {
      const {
        type,
        key,
        oldValue,
        newValue,
        children,
      } = item;

      let prefix = '';

      if (oldValue === '-') {
        prefix = '+ ';
      } else if (newValue === '-') {
        prefix = '- ';
      }

      const indent = ' '.repeat(depth * 4);

      switch (type) {
        case 'nested':
          return `${indent.slice(prefix === '- ' || prefix === '+ ' ? 2 : 0)}${prefix}${key}: {\n${createLayOut(children, depth + 1)}${indent}}\n`;
        case 'not_changed':
          return `${indent}${key}: ${newValue}\n`;
        case 'removed':
          return `${indent.slice(2)}- ${key}: ${oldValue}\n`;
        case 'changed':
          return `${indent.slice(2)}- ${key}: ${oldValue}\n${indent.slice(2)}+ ${key}: ${newValue}\n`;
        case 'added':
          return `${indent.slice(2)}+ ${key}: ${newValue}\n`;
        default:
          throw new Error(`Unknown type: ${type}`);
      }
    }).join('');
  };

  return `{\n${createLayOut(data, 1)}}`;
};

console.log(formatStylish(data1));
export default formatStylish;
