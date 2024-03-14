import parseFile from './parsers/parser.js';

const comparisonFiles = (path1, path2) => {
  const objOne = parseFile(path1);
  const objTwo = parseFile(path2);

  const createsDiffObject = (firstData, secondData) => {
    const uniqueKeys = [...new Set([...Object.keys(firstData), ...Object.keys(secondData)])];
    const differences = {};

    uniqueKeys.forEach((key) => {
      const firstValue = firstData[key];
      const secondValue = secondData[key];

      if (typeof firstValue === 'object' && typeof secondValue === 'object') {
        differences[`  ${key}`] = createsDiffObject(firstValue, secondValue);
      } else if (firstValue === secondValue) {
        differences[`  ${key}`] = firstValue;
      } else if (firstValue !== undefined && secondValue !== undefined) {
        differences[`- ${key}`] = firstValue;
        differences[`+ ${key}`] = secondValue;
      } else if (firstValue !== undefined) {
        differences[`- ${key}`] = firstValue;
      } else {
        differences[`+ ${key}`] = secondValue;
      }
    });

    return differences;
  };

  return createsDiffObject(objOne, objTwo);
};

export default comparisonFiles;
