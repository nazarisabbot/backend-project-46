import getFixturePath from './getFixturePath.js';
import parseFile from '../src/parsers/parser.js';
import comparisonFlatFiles from '../src/comparisonFiles.js';
import runComparisonFiles from '../src/index.js';
import stylish from '../src/formatters/stylish.js';
import plain from '../src/formatters/plain.js';
import formatToJson from '../src/formatters/json.js';
import expectedStringFormatStylish from './__fixtures__/filesJson/expectedStringFormatStylish.js';
import expectedStringFormatPlain from './__fixtures__/filesJson/expectedStringFormatPlain.js';
import expectedYmlString from './__fixtures__/filesYml/expectedYmlString.js';
import expectedStringFormatJson from './__fixtures__/filesJson/expectedStringFormatJson.js';
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
    .trim()).toBe(expectedStringFormatStylish.trim());
});

test('different yml files', () => {
  const diffObj = comparisonFlatFiles(firstYmlFile, secondYmlFile);
  expect(stylish(diffObj)
    .trim()).toBe(expectedYmlString.trim());
});

test('formatter plain', () => {
  const diffObj = comparisonFlatFiles(firstJsonFile, secondJsonFile);
  expect(plain(diffObj)
    .trim()).toBe(expectedStringFormatPlain.trim());
});

test('formatter json', () => {
  const diffObj = comparisonFlatFiles(firstJsonFile, secondJsonFile);
  expect(formatToJson(diffObj)).toBe(expectedStringFormatJson.trim());
});

test('genDiff test', () => {
  expect(runComparisonFiles(firstJsonFile, secondJsonFile, 'plain')).toEqual(expectedStringFormatPlain.trim());
});
