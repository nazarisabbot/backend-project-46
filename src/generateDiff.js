const sortedKeys = (arr) => [].concat(arr).sort((a, b) => {
  const matchA = a.match(/([^0-9]*)(\d*)/);
  const matchB = b.match(/([^0-9]*)(\d*)/);

  const [, keyA, numA = ''] = matchA;
  const [, keyB, numB = ''] = matchB;

  if (keyA < keyB) return -1;
  if (keyA > keyB) return 1;

  if (numA < numB) return -1;
  if (numA > numB) return 1;

  return 0;
});

const generateDiffAbstraction = (firstObj, secondObj) => {
  const createDiffNode = (type, key, oldValue, newValue, children = []) => ({
    type,
    key,
    oldValue,
    newValue,
    children,
  });

  const createLayout = (obj1, obj2) => {
    const uniqKeys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])];
    const sortedArrKeys = sortedKeys(uniqKeys);

    return sortedArrKeys.map((key) => {
      const firstValue = obj1[key];
      const secondValue = obj2[key];

      switch (true) {
        case typeof firstValue === 'object' && typeof secondValue === 'object':
          return createDiffNode('nested', key, 'object', 'object', createLayout(firstValue, secondValue));
        case firstValue === secondValue:
          return createDiffNode('not_changed', key, firstValue, secondValue);
        case firstValue !== undefined && secondValue !== undefined:
          return createDiffNode('changed', key, firstValue, secondValue);
        case firstValue !== undefined:
          return createDiffNode('removed', key, firstValue, secondValue);
        case secondValue !== undefined:
          return createDiffNode('added', key, firstValue, secondValue);
        default:
          throw new Error(`Unknown type: ${firstValue}`);
      }
    });
  };

  return createLayout(firstObj, secondObj);
};

export default generateDiffAbstraction;
