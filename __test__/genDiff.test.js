import fs from 'fs';
import getFixturePath from './getFixturePath.js';
import parseFile from '../src/parser/parser.js';
import generateDiffAbstraction from '../src/generateDiff.js';
import runComparisonFiles from '../src/index.js';
import formatStylish from '../src/formatters/formatStylish.js';
import formatPlain from '../src/formatters/formatPlain.js';
import formatJson from '../src/formatters/formatJson.js';
import expectedStringFormatStylish from './__fixtures__/filesJson/expectedStringFormatStylish.js';
import expectedStringFormatStylishR2 from './__fixtures__/filesJson/expectedStringFormatStylishR2.js';
import expectedStringFormatPlain from './__fixtures__/filesJson/expectedStringFormatPlain.js';
import expectedYmlString from './__fixtures__/filesYml/expectedYmlString.js';
import expectedStringFromGenerateDiff from './__fixtures__/filesJson/expectedStringFromGenerateDiff.js';
import obj from './__fixtures__/filesJson/obj.js';

const firstJsonFile = getFixturePath('filesJson', 'file1.json');
const secondJsonFile = getFixturePath('filesJson', 'file2.json');

const thirdJsonFile = getFixturePath('filesJson', 'file3.json');
const fourthJsonFile = getFixturePath('filesJson', 'file4.json');

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

test('different by stylish formatter files', () => {
  const firstData = fs.readFileSync(firstJsonFile, 'utf-8');
  const secondData = fs.readFileSync(secondJsonFile, 'utf-8');
  const diffObj = generateDiffAbstraction(parseFile(firstData, 'json'), parseFile(secondData, 'json'));
  expect(formatStylish(diffObj)
    .trim()).toBe(expectedStringFormatStylish.trim());
});

test('different by stylish formatter files R2', () => {
  const firstData = fs.readFileSync(thirdJsonFile, 'utf-8');
  const secondData = fs.readFileSync(fourthJsonFile, 'utf-8');
  const diffObj = generateDiffAbstraction(parseFile(firstData, 'json'), parseFile(secondData, 'json'));
  expect(formatStylish(diffObj)
    .trim()).toBe(expectedStringFormatStylishR2.trim());
});

test('different yml files', () => {
  const firstData = fs.readFileSync(firstYmlFile, 'utf-8');
  const secondData = fs.readFileSync(secondYmlFile, 'utf-8');
  const diffObj = generateDiffAbstraction(parseFile(firstData, 'yml'), parseFile(secondData, 'yml'));
  expect(formatStylish(diffObj)
    .trim()).toBe(expectedYmlString.trim());
});

test('formatter plain', () => {
  const firstData = fs.readFileSync(firstJsonFile, 'utf-8');
  const secondData = fs.readFileSync(secondJsonFile, 'utf-8');
  const diffObj = generateDiffAbstraction(parseFile(firstData, 'json'), parseFile(secondData, 'json'));
  expect(formatPlain(diffObj)
    .trim()).toBe(expectedStringFormatPlain.trim());
});

test('formatter json', () => {
  const expectedJsonFormat = fs.readFileSync('./__test__/__fixtures__/filesJson/expectedResult.json', 'utf8');
  const firstData = fs.readFileSync(firstJsonFile, 'utf-8');
  const secondData = fs.readFileSync(secondJsonFile, 'utf-8');
  const diffObj = generateDiffAbstraction(parseFile(firstData, 'json'), parseFile(secondData, 'json'));
  expect(formatJson(diffObj)).toBe(expectedJsonFormat);
});

test('genDiff test', () => {
  expect(runComparisonFiles(firstJsonFile, secondJsonFile, 'stylish')).toEqual(expectedStringFormatStylish.trim());
});

test('generateDiff test', () => {
  const firstData = fs.readFileSync(firstJsonFile, 'utf-8');
  const secondData = fs.readFileSync(secondJsonFile, 'utf-8');
  expect(JSON.stringify(generateDiffAbstraction(parseFile(firstData, 'json'), parseFile(secondData, 'json')), null, 2)).toEqual(expectedStringFromGenerateDiff.trim());
});
