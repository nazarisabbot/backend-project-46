import generateDiff from './comparisonFiles.js';
import getAbsolutePathAndExtname from './getAbsolutePathAndExtname.js';
import parseFile from './parser/parser.js';
import formatDiff from './formatters/index.js';

const runComparisonFiles = (path1, path2, format) => {
  const { path: firstPath, extension: firstExtname } = getAbsolutePathAndExtname(path1);
  const { path: secondPath, extension: secondExtname } = getAbsolutePathAndExtname(path2);
  const result = generateDiff(
    parseFile(firstPath, firstExtname),
    parseFile(secondPath, secondExtname),
  );
  return formatDiff(result, format);
};

export default runComparisonFiles;
