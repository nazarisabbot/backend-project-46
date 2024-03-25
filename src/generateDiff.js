import fs from 'fs';
import parseFile from './parser/parser.js';

const path1 = './temp/file1.json';
const path2 = './temp/file2.json';

const firstData = fs.readFileSync(path1, 'utf-8');
const secondData = fs.readFileSync(path2, 'utf-8');

const one = parseFile(firstData, 'json');
const two = parseFile(secondData, 'json');
const generateDiffAbstraction = (firstObj, secondObj) => {
  const createDiffNode = (type, key, oldValue, newValue, children = []) => ({
    type,
    key,
    oldValue,
    newValue,
    children,
  });

  const createLayout = (obj1, obj2) => {
    const uniqKeys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])];

    return uniqKeys.map((key) => {
      const firstValue = obj1[key];
      const secondValue = obj2[key];

      switch (true) {
        case typeof firstValue === 'object' && typeof secondValue !== 'object' && secondValue !== undefined:
          return createDiffNode('nested', key, 'object', secondValue, createLayout(firstValue, {}));
        case typeof firstValue === 'object' && secondValue === undefined:
          return createDiffNode('nested', key, 'object', '-', createLayout(firstValue, {}));
        case firstValue === undefined && typeof secondValue === 'object':
          return createDiffNode('nested', key, '-', 'object', createLayout({}, secondValue));
        case typeof firstValue === 'object' && typeof secondValue === 'object':
          return createDiffNode('nested', key, 'object', 'object', createLayout(firstValue, secondValue));
        case firstValue === secondValue:
          return createDiffNode('not_changed', key, firstValue, secondValue);
        case firstValue !== undefined && secondValue !== undefined:
          return createDiffNode('changed', key, firstValue, secondValue);
        case firstValue !== undefined:
          return createDiffNode('removed', key, firstValue, '-');
        case secondValue !== undefined:
          return createDiffNode('added', key, '-', secondValue);
        default:
          throw new Error(`Unknown type: ${firstValue}`);
      }
    });
  };

  return createLayout(firstObj, secondObj);
};

// console.log(JSON.stringify(generateDiffAbstraction(one, two), null, 2));
export default generateDiffAbstraction;
