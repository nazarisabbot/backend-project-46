import _ from 'lodash';

const comparisonFlatFiles = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  const uniqueKeys = new Set([...keys1, ...keys2]);

  const differences = {};

  uniqueKeys.forEach((key) => {
    if(obj1[key] === obj2[key]) {
      differences[`  ${key}`] = obj1[key];
    } else if(obj1[key] !== undefined && obj2[key] !== undefined) {
      differences[`- ${key}`] = obj1[key];
      differences[`+ ${key}`] = obj2[key];
    } else if (obj1[key] !== undefined) {
      differences[`- ${key}`] = obj1[key];
    } else {
      differences[`+ ${key}`] = obj2[key];
    }
  });

  const sortedKeys = Object.keys(differences).sort((a, b) => {
    const aFirstChar = a[2];
    const bFirstChar = b[2];
    return aFirstChar.localeCompare(bFirstChar);
  });


  const result = sortedKeys.map((key) => {
    const value = differences[key];
    return `${key}: ${value}`;
  }).join('\n');

  return result;
  
};

export default comparisonFlatFiles;