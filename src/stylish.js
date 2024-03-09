const stylish = (data) => {
  const createLayout = (obj, depth) => {
    let result = '';
    const keys = Object.keys(obj);

    const sortedKeys = keys.sort((a, b) => {
      const alphaSort = a.replace(/^\W+/, '').localeCompare(b.replace(/^\W+/, ''));
      if (alphaSort !== 0) {
        return alphaSort;
      }

      const postfixA = a.replace(/^\W*\w+/, '');
      const postfixB = b.replace(/^\W*\w+/, '');

      if (/^\d/.test(postfixA) && /^\d/.test(postfixB)) {
        return Number(postfixA) - Number(postfixB);
      }

      return a.localeCompare(b);
    });

    sortedKeys.forEach((key) => {
      const value = obj[key];

      if (typeof value === 'object' && value !== null) {
        const indent = key[0] === '-' || key[0] === '+' ? 2 : 0;
        result += `${' '.repeat((depth + 1) * 4)}${key.trim()}: {\n`.slice(indent);
        result += createLayout(value, depth + 1);
        result += `${' '.repeat((depth + 1) * 4)}}\n`;
      } else if (key[0] === '-' || key[0] === '+') {
        result += `${' '.repeat((depth + 1) * 4)}${key}: ${value}\n`.substring(2);
      } else {
        result += `${' '.repeat((depth + 1) * 4)}${key.trim()}: ${value}\n`;
      }
    });
    return result;
  };

  return `{\n${createLayout(data, 0)}}`;
};

export default stylish;
