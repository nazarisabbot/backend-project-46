import path from 'path';
import parseFileYml from '../src/parserYml.js';
import obj1 from './__fixtures__/flatYml/obj.js';

const basePath = process.cwd();

const path1 = path.resolve(basePath, 'temp', 'file1.yml');

test('parse JSON', () => {
  expect(parseFileYml(path1)).toEqual(obj1);
});
