import _ from 'lodash';

const sortedKeys = (arr) => {
  const sortedPairs = _.sortBy(arr.map((item) => {
    const match = item.match(/([^0-9]*)(\d*)/);
    const [, key, num = ''] = match;
    return { key, num, original: item };
  }), ['key', 'num']);
  return sortedPairs.map((pair) => pair.original);
};

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
