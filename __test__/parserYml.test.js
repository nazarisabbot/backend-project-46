import getFixturePath from './getFixturePath.js';
import parseFileYml from '../src/parsers/parserYml.js';
import obj1 from './__fixtures__/flatYml/obj.js';

const file1Path = getFixturePath('flatYml', 'file1.yml');
const wrongPath = getFixturePath('flatYml2', 'file1.yml');

test('parse JSON', () => {
  expect(parseFileYml(file1Path)).toEqual(obj1);
});

test('wrong path to YML file', () => {
  const wrapperFunction = () => {
    parseFileYml(wrongPath);
  };

  expect(wrapperFunction).toThrow(`File not found: ${wrongPath}`);
});
