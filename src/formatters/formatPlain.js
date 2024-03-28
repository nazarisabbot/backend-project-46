const formatValue = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }

  if (typeof value === 'boolean' || typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    return `'${value}'`;
  }

  if (value === null) {
    return 'null';
  }

  if (value === '') {
    return "''";
  }

  return undefined;
};

const formatPlain = (items, ancestry = '') => items.map((item) => {
  const {
    type,
    key,
    oldValue,
    newValue,
    children,
  } = item;

  const fullKey = ancestry ? `${ancestry}.${key}` : key;

  switch (type) {
    case 'nested':
      return formatPlain(children, fullKey);
    case 'added':
      return `Property '${fullKey}' was added with value: ${formatValue(newValue)}`;
    case 'removed':
      return `Property '${fullKey}' was removed`;
    case 'changed':
      return `Property '${fullKey}' was updated. From ${formatValue(oldValue)} to ${formatValue(newValue)}`;
    default:
      return null;
  }
}).filter(Boolean).join('\n');

export default formatPlain;
