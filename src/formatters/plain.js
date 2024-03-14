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

const prepareUpdatedResult = (result, str) => result.concat([str]).filter((s) => s.trim() !== '');

const plain = (data, parentKey = '') => {
  const arrSortedKeys = sortedKeys(Object.keys(data));

  return arrSortedKeys.reduce((result, key, index) => {
    const nextKey = arrSortedKeys[index + 1];
    const prevKey = arrSortedKeys[index - 1];

    const value = data[key];
    const prevValue = data[prevKey];
    const fullKey = parentKey ? `${trimsPrefixKey(parentKey)}.${trimsPrefixKey(key)}` : trimsPrefixKey(key);

    if (isComplexValue(value) && value !== null) {
      if (key.startsWith('+')) {
        if (prevKey && key.slice(2) === prevKey.slice(2) && prevKey.startsWith('-')) {
          const str = `Property '${fullKey}' was updated. From ${stringifyValue(prevValue)} to ${stringifyValue(value)}`;
          return prepareUpdatedResult(result, str);
        }
        const str = `Property '${fullKey}' was added with value: [complex value]`;
        return prepareUpdatedResult(result, str);
      }

      if (key.startsWith('-')) {
        if (nextKey && key.slice(2) === nextKey.slice(2) && nextKey.startsWith('+')) {
          return result;
        }
        const str = `Property '${fullKey}' was removed`;
        return prepareUpdatedResult(result, str);
      }

      const nestedResult = plain(value, fullKey);
      if (nestedResult) {
        return prepareUpdatedResult(result, nestedResult);
      }
      return result;
    }

    if (key.startsWith('+')) {
      if (prevKey && key.slice(2) === prevKey.slice(2) && prevKey.startsWith('-')) {
        const str = `Property '${fullKey}' was updated. From ${stringifyValue(prevValue)} to ${stringifyValue(value)}`;
        return prepareUpdatedResult(result, str);
      }
      const str = `Property '${fullKey}' was added with value: ${typeof value === 'string' ? `'${value}'` : value}`;
      return prepareUpdatedResult(result, str);
    }

    if (key.startsWith('-') && (!nextKey || !(key.slice(2) === nextKey.slice(2) && nextKey.startsWith('+')))) {
      const str = `Property '${fullKey}' was removed`;
      return prepareUpdatedResult(result, str);
    }

    return result;
  }, []).join('\n');
};

export default plain;
