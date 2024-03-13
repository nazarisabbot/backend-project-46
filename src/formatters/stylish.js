import sortedKeys from './sortedKeys.js';

const stylish = (data) => {
  const createLayout = (obj, depth) => {
    let result = '';
    const keys = sortedKeys(Object.keys(obj));

    keys.forEach((key) => {
      const value = obj[key];
      const leftIndent = key[0] === '-' || key[0] === '+' ? 2 : 0;

      switch (true) {
        case (typeof value === 'object' && value !== null):
          result += `${' '.repeat((depth + 1) * 4)}${key.trim()}: {\n`.slice(leftIndent);
          result += createLayout(value, depth + 1);
          result += `${' '.repeat((depth + 1) * 4)}}\n`;
          break;
        case (leftIndent > 0):
          result += `${' '.repeat((depth + 1) * 4)}${key}: ${value}\n`.slice(leftIndent);
          break;
        default:
          result += `${' '.repeat((depth + 1) * 4)}${key.trim()}: ${value}\n`;
      }
    });
    return result;
  };

  return `{\n${createLayout(data, 0)}}`;
};

export default stylish;
