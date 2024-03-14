import comparisonFiles from './comparisonFiles.js';
import formatter from './formatters/index.js';

const runComparisonFiles = (path1, path2, format) => {
  const result = comparisonFiles(path1, path2);
  const formattedDiff = formatter(result, format);
  return formattedDiff;
};

export default runComparisonFiles;
