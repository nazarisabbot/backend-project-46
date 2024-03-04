import getFixturePath from './getFixturePath.js';
import parseFile from '../src/parsers/parser.js';
import comparisonFlatFiles from '../src/comparisonFiles.js';
import stylish from '../src/stylish.js';
import expectedJsonString from './__fixtures__/filesJson/expectedJsonString.js';
import expectedYmlString from './__fixtures__/filesYml/expectedYmlString.js';
import obj from './__fixtures__/filesJson/obj.js';

const firstJsonFile = getFixturePath('filesJson', 'file1.json');
const secondJsonFile = getFixturePath('filesJson', 'file2.json');

const firstYmlFile = getFixturePath('filesYml', 'file1.yml');
const secondYmlFile = getFixturePath('filesYml', 'file2.yml');

test('parse JSON', () => {
  expect(parseFile(firstJsonFile)).toEqual(obj);
});

test('parse YML', () => {
  expect(parseFile(firstYmlFile)).toEqual(obj);
});

test('different json files', () => {
  const diffObj = comparisonFlatFiles(firstJsonFile, secondJsonFile);
  expect(stylish(diffObj)
    .trim()).toBe(expectedJsonString.trim());
});

test('different yml files', () => {
  const diffObj = comparisonFlatFiles(firstYmlFile, secondYmlFile);
  expect(stylish(diffObj)
    .trim()).toBe(expectedYmlString.trim());
});
