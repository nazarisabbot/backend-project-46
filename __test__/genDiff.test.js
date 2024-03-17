import getFixturePath from './getFixturePath.js';
import parser from '../src/parser/parser.js';
import generateDiff from '../src/comparisonFiles.js';
import runComparisonFiles from '../src/index.js';
import formatStylish from '../src/formatters/formatStylish.js';
import formatPlain from '../src/formatters/formatPlain.js';
import formatJson from '../src/formatters/formatJson.js';
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
  expect(parser(firstJsonFile, '.json')).toEqual(obj);
});

test('parse YML', () => {
  expect(parser(firstYmlFile, '.yml')).toEqual(obj);
});

test('different json files', () => {
  const diffObj = generateDiff(parser(firstJsonFile, '.json'), parser(secondJsonFile, '.json'));
  expect(formatStylish(diffObj)
    .trim()).toBe(expectedStringFormatStylish.trim());
});

test('different yml files', () => {
  const diffObj = generateDiff(parser(firstYmlFile, '.yml'), parser(secondYmlFile, '.yml'));
  expect(formatStylish(diffObj)
    .trim()).toBe(expectedYmlString.trim());
});

test('formatter plain', () => {
  const diffObj = generateDiff(parser(firstJsonFile, '.json'), parser(secondJsonFile, '.json'));
  expect(formatPlain(diffObj)
    .trim()).toBe(expectedStringFormatPlain.trim());
});

test('formatter json', () => {
  const diffObj = generateDiff(parser(firstJsonFile, '.json'), parser(secondJsonFile, '.json'));
  expect(formatJson(diffObj)).toBe(expectedStringFormatJson.trim());
});

test('genDiff test', () => {
  expect(runComparisonFiles(firstJsonFile, secondJsonFile, 'plain')).toEqual(expectedStringFormatPlain.trim());
});
