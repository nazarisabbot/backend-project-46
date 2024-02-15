import path from 'path';
import comparisonFlatFiles from '../src/comparisonFlatFiles.js';
import expectedOutputRev1 from './__fixtures__/flatJson/expectedJsonStrinRev1.js';
import expectedOutputRev2 from './__fixtures__/flatJson/expectedJsonStrinRev2.js';

const basePath = process.cwd();

const path1 = path.resolve(basePath, '__test__', '__fixtures__', 'flatJson', 'file1.json');
const path2 = path.resolve(basePath, '__test__', '__fixtures__', 'flatJson', 'file2.json');

const path3 = path.resolve(basePath, '__test__', '__fixtures__', 'flatJson', 'file3.json');
const path4 = path.resolve(basePath, '__test__', '__fixtures__', 'flatJson', 'file4.json');

const empty1 = path.resolve(basePath, '__test__', '__fixtures__', 'flatJson', 'empty1.json');
const empty2 = path.resolve(basePath, '__test__', '__fixtures__', 'flatJson', 'empty2.json');

test('when 2 different files', () => {
  expect(comparisonFlatFiles(path1, path2).trim()).toBe(expectedOutputRev1.trim());
});

test('when 2 different files rev2', () => {
  expect(comparisonFlatFiles(path3, path4).trim()).toBe(expectedOutputRev2.trim());
});

test('when 2 empty files', () => {
  const expectedOutputEmpty = 'Both files are empty';
  expect(comparisonFlatFiles(empty1, empty2).trim()).toBe(expectedOutputEmpty.trim());
});
