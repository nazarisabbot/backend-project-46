import getFixturePath from './getFixturePath.js';
import comparisonFlatFiles from '../src/comparisonFlatFiles.js';
import expectedOutputRev1 from './__fixtures__/flatYml/expectedJsonStringRev1.js';

const file1path = getFixturePath('flatYml', 'file1.yml');
const file2path = getFixturePath('flatYml', 'file2.yml');

test('when 2 different files', () => {
  expect(comparisonFlatFiles(file1path, file2path).trim()).toBe(expectedOutputRev1.trim());
});
