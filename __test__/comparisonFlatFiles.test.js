import path from 'path';
import comparisonFlatFiles from '../src/json/comparisonFlatFiles.js';
import expectedOutputEmpty from './__fixtures__/flatJson/expectedJsonStrin.js';

const basePath = process.cwd();

const path1 = path.resolve(basePath, 'temp', 'file1.json');
const path2 = path.resolve(basePath, 'temp', 'file2.json');

const empty1 = path.resolve(basePath, '__test__', '__fixtures__', 'flatJson', 'empty1.json');
const empty2 = path.resolve(basePath, '__test__', '__fixtures__', 'flatJson', 'empty2.json');

test('when 2 different files', () => {
  expect(comparisonFlatFiles(path1, path2).trim()).toBe(expectedOutputEmpty.trim());
});

test('when 2 empty files', () => {
  const expectedOutput = 'Both files are empty';
  expect(comparisonFlatFiles(empty1, empty2).trim()).toBe(expectedOutput.trim());
});
