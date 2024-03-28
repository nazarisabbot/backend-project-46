import fs from 'fs';
import generateDiffAbstraction from './generateDiff.js';
import getAbsolutePathAndExtname from './getAbsolutePathAndExtname.js';
import parseFile from './parser/parser.js';
import formatDiff from './formatters/index.js';

const runComparisonFiles = (path1, path2, format) => {
  const { path: firstPath, extension: firstExtname } = getAbsolutePathAndExtname(path1);
  const { path: secondPath, extension: secondExtname } = getAbsolutePathAndExtname(path2);
  const firstData = fs.readFileSync(firstPath, 'utf-8');
  const secondData = fs.readFileSync(secondPath, 'utf-8');
  const result = generateDiffAbstraction(
    parseFile(firstData, firstExtname.slice(1)),
    parseFile(secondData, secondExtname.slice(1)),
  );
  return formatDiff(result, format);
};

export default runComparisonFiles;
