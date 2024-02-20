import getFixturePath from './getFixturePath.js';
import parseFileJson from '../src/parsers/parserJson.js';
import obj1 from './__fixtures__/flatJson/obj.js';

const file1Path = getFixturePath('flatJson', 'file1.json');
const wrongPath = getFixturePath('flatJson2', 'file1.json');

test('parse JSON', () => {
  expect(parseFileJson(file1Path)).toEqual(obj1);
});

test('wrong path to YML file', () => {
  const wrapperFunction = () => {
    parseFileJson(wrongPath);
  };

  expect(wrapperFunction).toThrow(`File not found: ${wrongPath}`);
});
