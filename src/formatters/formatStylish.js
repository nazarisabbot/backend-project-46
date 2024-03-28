const formatStylish = (data) => {
  const createLayOut = (arr, depth) => arr.map((item) => {
    const {
      type,
      key,
      oldValue,
      newValue,
      children,
    } = item;

    let prefix = '';

    if (oldValue === '-') {
      prefix = '+ ';
    }
    if (newValue === '-') {
      prefix = '- ';
    }

    const indent = ' '.repeat(depth * 4);

    const formatValue = (value, currentDepth) => {
      if (typeof value === 'object' && value !== null && value !== undefined) {
        const formattedValue = Object.entries(value).map(([subKey, subValue]) => {
          const formattedSubValue = formatValue(subValue, currentDepth + 1);
          const subIndent = ' '.repeat((currentDepth + 1) * 4);
          return `${subIndent}${subKey}: ${formattedSubValue}`;
        }).join('\n');
        return `{\n${formattedValue}\n${' '.repeat(currentDepth * 4)}}`;
      }
      // новый код: форматирование объекта в строку
      if (value !== null && typeof value === 'object') {
        return `{\n${Object.entries(value).map(([objKey, objVal]) => `  ${objKey}: ${objVal}`).join('\n')}\n}`;
      }
      return value;
    };
    switch (type) {
      case 'nested':
        return `${indent.slice(prefix === '- ' || prefix === '+ ' ? 2 : 0)}${prefix}${key}: {\n${createLayOut(children, depth + 1)}${indent}}\n`;
      case 'not_changed':
        if (typeof newValue === 'object') {
          return `${indent.slice(2)} ${key}: ${formatValue(newValue, depth)}\n`;
        }
        return `${indent}${key}: ${newValue}\n`;

      case 'removed':
        if (typeof oldValue === 'object') {
          return `${indent.slice(2)}- ${key}: ${formatValue(oldValue, depth)}\n`;
        }
        return `${indent.slice(2)}- ${key}: ${oldValue}\n`;

      case 'changed':
        if (typeof oldValue === 'object' && typeof newValue === 'object') {
          return `${indent.slice(2)}- ${key}: ${formatValue(oldValue, depth)}\n${indent.slice(2)}+ ${key}: ${formatValue(newValue, depth)}\n`;
        } else if (typeof oldValue === 'object') {
          return `${indent.slice(2)}- ${key}: ${formatValue(oldValue, depth)}\n${indent.slice(2)}+ ${key}: ${newValue}\n`;
        } else if (typeof newValue === 'object') {
          return `${indent.slice(2)}- ${key}: ${oldValue}\n${indent.slice(2)}+ ${key}: ${formatValue(newValue, depth)}\n`;
        }
        return `${indent.slice(2)}- ${key}: ${oldValue}\n${indent.slice(2)}+ ${key}: ${newValue}\n`;

      case 'added':
        if (typeof newValue === 'object') {
          return `${indent.slice(2)}+ ${key}: ${formatValue(newValue, depth)}\n`;
        }
        return `${indent.slice(2)}+ ${key}: ${newValue}\n`;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  }).join('');

  return `{\n${createLayOut(data, 1)}}`;
};

export default formatStylish;
