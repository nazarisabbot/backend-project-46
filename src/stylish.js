const stylish = (data) => {
  const createLayout = (obj, depth) => {
    let resultString = '';

    const generateLineValue = (nameKey, target, level) => {
      const indent = '.'.repeat(level);
      return `${indent}${nameKey}: ${target}\n`;
    };

    const keys = Object.keys(obj);

    keys.forEach((key) => {
      const value = obj[key];
      // const indent = key[0] === '-' || key[0] === '+' ? 2 : 4;
      if (typeof value === 'object' && value !== null) {
        resultString += `${'*'.repeat((depth + 1) * 4).substring(0, 2)}${key}: {\n`;
        resultString += createLayout(value, depth + 1 * 4);
        resultString += `${' '.repeat(depth + 1 * 4)}}\n`;
      } else {
        resultString += `${generateLineValue(key, value, depth + 1 * 2)}`;
      }
    });

    return resultString;
  };

  return `{\n${createLayout(data, 0)}\n}`;
};

export default stylish;
