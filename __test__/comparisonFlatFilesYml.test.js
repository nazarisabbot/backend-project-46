import path from 'path';
import comparisonFlatFiles from '../src/comparisonFlatFiles.js';
import expectedOutputRev1 from './__fixtures__/flatYml/expectedJsonStrinRev1.js';

const basePath = process.cwd();

const path1 = path.resolve(basePath, '__test__', '__fixtures__', 'flatYml', 'file1.yml');
const path2 = path.resolve(basePath, '__test__', '__fixtures__', 'flatYml', 'file2.yml');

test('when 2 different files', () => {
  expect(comparisonFlatFiles(path1, path2, 'yml').trim()).toBe(expectedOutputRev1.trim());
});
