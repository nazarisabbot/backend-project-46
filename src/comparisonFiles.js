import parseFile from './parsers/parser.js';

const comparisonFiles = (path1, path2) => {
  const objOne = parseFile(path1);
  const objTwo = parseFile(path2);

  const createsDiffObject = (firstData, secondData) => {
    const uniqueKeys = [...new Set([...Object.keys(firstData), ...Object.keys(secondData)])];

    return uniqueKeys.reduce((differences, key) => {
      const firstValue = firstData[key];
      const secondValue = secondData[key];

      if (typeof firstValue === 'object' && typeof secondValue === 'object') {
        return { ...differences, [`  ${key}`]: createsDiffObject(firstValue, secondValue) };
      }
      if (firstValue === secondValue) {
        return { ...differences, [`  ${key}`]: firstValue };
      }
      if (firstValue !== undefined && secondValue !== undefined) {
        return { ...differences, [`- ${key}`]: firstValue, [`+ ${key}`]: secondValue };
      }
      if (firstValue !== undefined) {
        return { ...differences, [`- ${key}`]: firstValue };
      }
      return { ...differences, [`+ ${key}`]: secondValue };
    }, {});
  };

  return createsDiffObject(objOne, objTwo);
};

export default comparisonFiles;
