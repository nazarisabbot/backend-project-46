import getFixturePath from './getFixturePath.js';
import comparisonFlatFiles from '../src/comparisonFlatFiles.js';
import expectedOutputRev1 from './__fixtures__/flatJson/expectedJsonStringRev1.js';
import expectedOutputRev2 from './__fixtures__/flatJson/expectedJsonStringRev2.js';

const file1path = getFixturePath('flatJson', 'file1.json');
const file2path = getFixturePath('flatJson', 'file2.json');

const file3path = getFixturePath('flatJson', 'file3.json');
const file4path = getFixturePath('flatJson', 'file4.json');

const empty1 = getFixturePath('flatJson', 'empty1.json');
const empty2 = getFixturePath('flatJson', 'empty2.json');

test('when 2 different files', () => {
  expect(comparisonFlatFiles(file1path, file2path).trim()).toBe(expectedOutputRev1.trim());
});

test('when 2 different files rev2', () => {
  expect(comparisonFlatFiles(file3path, file4path).trim()).toBe(expectedOutputRev2.trim());
});

test('when 2 empty files', () => {
  const expectedOutputEmpty = 'Both files are empty';
  expect(comparisonFlatFiles(empty1, empty2).trim()).toBe(expectedOutputEmpty.trim());
});
