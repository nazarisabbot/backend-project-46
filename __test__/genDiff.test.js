import fs from 'fs';
import getFixturePath from './getFixturePath.js';
import parseFile from '../src/parser/parser.js';
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
  const firstData = fs.readFileSync(firstJsonFile, 'utf-8');
  expect(parseFile(firstData, 'json')).toEqual(obj);
});

test('parse YML', () => {
  const firstData = fs.readFileSync(firstYmlFile, 'utf-8');
  expect(parseFile(firstData, 'yml')).toEqual(obj);
});

test('different json files', () => {
  const firstData = fs.readFileSync(firstJsonFile, 'utf-8');
  const secondData = fs.readFileSync(secondJsonFile, 'utf-8');
  const diffObj = generateDiff(parseFile(firstData, 'json'), parseFile(secondData, 'json'));
  expect(formatStylish(diffObj)
    .trim()).toBe(expectedStringFormatStylish.trim());
});

test('different yml files', () => {
  const firstData = fs.readFileSync(firstYmlFile, 'utf-8');
  const secondData = fs.readFileSync(secondYmlFile, 'utf-8');
  const diffObj = generateDiff(parseFile(firstData, 'yml'), parseFile(secondData, 'yml'));
  expect(formatStylish(diffObj)
    .trim()).toBe(expectedYmlString.trim());
});

test('formatter plain', () => {
  const firstData = fs.readFileSync(firstJsonFile, 'utf-8');
  const secondData = fs.readFileSync(secondJsonFile, 'utf-8');
  const diffObj = generateDiff(parseFile(firstData, 'json'), parseFile(secondData, 'json'));
  expect(formatPlain(diffObj)
    .trim()).toBe(expectedStringFormatPlain.trim());
});

test('formatter json', () => {
  const firstData = fs.readFileSync(firstJsonFile, 'utf-8');
  const secondData = fs.readFileSync(secondJsonFile, 'utf-8');
  const diffObj = generateDiff(parseFile(firstData, 'json'), parseFile(secondData, 'json'));
  expect(formatJson(diffObj)).toBe(expectedStringFormatJson.trim());
});

test('genDiff test', () => {
  expect(runComparisonFiles(firstJsonFile, secondJsonFile, 'plain')).toEqual(expectedStringFormatPlain.trim());
});
