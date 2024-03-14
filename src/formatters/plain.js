import sortedKeys from './sortedKeys.js';

const trimsPrefixKey = (key) => (key.startsWith('+') || key.startsWith('-') ? key.slice(2) : key.trim());
const isComplexValue = (v) => typeof v === 'object';

const stringifyValue = (value) => {
  if (value === null) {
    return 'null';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  if (isComplexValue(value)) {
    return '[complex value]';
  }
  return value;
};

const plain = (data, parentKey = '') => {
  const arrSortedKeys = sortedKeys(Object.keys(data));

  const resultArray = arrSortedKeys.flatMap((key, index) => {
    const nextKey = arrSortedKeys[index + 1];
    const prevKey = arrSortedKeys[index - 1];

    const value = data[key];
    const prevValue = data[prevKey];
    const fullKey = parentKey ? `${trimsPrefixKey(parentKey)}.${trimsPrefixKey(key)}` : trimsPrefixKey(key);

    let processedArray = [];

    if (isComplexValue(value) && value !== null) {
      if (key.startsWith('+')) {
        if (prevKey && key.slice(2) === prevKey.slice(2) && prevKey.startsWith('-')) {
          processedArray = [...processedArray, `Property '${fullKey}' was updated. From ${stringifyValue(prevValue)} to ${stringifyValue(value)}`];
        } else if (!nextKey || key.slice(2) !== nextKey.slice(2) || !nextKey.startsWith('+')) {
          processedArray = [...processedArray, `Property '${fullKey}' was added with value: [complex value]`];
        }
      }
      if (key.startsWith('-') && (!nextKey || key.slice(2) !== nextKey.slice(2) || !nextKey.startsWith('+'))) {
        processedArray = [...processedArray, `Property '${fullKey}' was removed`];
      }
      const nestedResult = plain(value, fullKey);
      if (nestedResult) {
        processedArray = [...processedArray, nestedResult];
      }
    } else {
      if (key.startsWith('+')) {
        if (prevKey && key.slice(2) === prevKey.slice(2) && prevKey.startsWith('-')) {
          processedArray = [...processedArray, `Property '${fullKey}' was updated. From ${stringifyValue(prevValue)} to ${stringifyValue(value)}`];
        } else if (!nextKey || key.slice(2) !== nextKey.slice(2) || !nextKey.startsWith('+')) {
          processedArray = [...processedArray, `Property '${fullKey}' was added with value: ${typeof value === 'string' ? `'${value}'` : value}`];
        }
      }
      if (key.startsWith('-') && (!nextKey || key.slice(2) !== nextKey.slice(2) || !nextKey.startsWith('+'))) {
        processedArray = [...processedArray, `Property '${fullKey}' was removed`];
      }
    }

    return processedArray.filter((str) => str.trim() !== '');
  });

  return resultArray.join('\n');
};

export default plain;
