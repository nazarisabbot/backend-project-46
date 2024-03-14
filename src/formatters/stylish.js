import sortedKeys from './sortedKeys.js';

const stylish = (data) => {
  const createLayOut = (obj, depth) => {
    const keys = sortedKeys(Object.keys(obj));
    return keys.map((key) => {
      const value = obj[key];
      const leftIndent = key[0] === '-' || key[0] === '+' ? 2 : 0;

      switch (true) {
        case (typeof value === 'object' && value !== null):
          return `${' '.repeat((depth + 1) * 4)}${key.trim()}: {\n${createLayOut(value, depth + 1)}${' '.repeat((depth + 1) * 4)}}\n`.slice(leftIndent);
        case (leftIndent > 0):
          return `${' '.repeat((depth + 1) * 4)}${key}: ${value}\n`.slice(leftIndent);
        default:
          return `${' '.repeat((depth + 1) * 4)}${key.trim()}: ${value}\n`;
      }
    }).join('');
  };

  return `{\n${createLayOut(data, 0)}}`;
};

export default stylish;
