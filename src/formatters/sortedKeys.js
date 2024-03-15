import _ from 'lodash';

export default (keys) => _.sortBy(keys, [(key) => {
  const alphaSortKey = key.replace(/^\W+/, '').toLowerCase();
  const postfixKey = key.replace(/^\W*\w+/, '');
  return [alphaSortKey, postfixKey];
}]);
