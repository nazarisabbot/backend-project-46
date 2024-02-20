import getFixturePath from './getFixturePath.js';
import comparisonFlatFiles from '../src/comparisonFlatFiles.js';
import expectedNestedJsonString from './__fixtures__/nestedJson/expectedNestedJsonString.js';

const file1path = getFixturePath('nestedJson', 'file1.json');
const file2path = getFixturePath('nestedJson', 'file2.json')

test('when 2 different files', () => {
  expect(comparisonFlatFiles(file1path, file2path).trim()).toBe(expectedNestedJsonString.trim());
});
