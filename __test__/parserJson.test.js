import path from 'path';
import parseFileJson from '../src/parserJson.js';
import obj1 from './__fixtures__/flatJson/obj.js';

const basePath = process.cwd();

const path1 = path.resolve(basePath, 'temp', 'file1.json');

test('parse JSON', () => {
  expect(parseFileJson(path1)).toEqual(obj1);
});
