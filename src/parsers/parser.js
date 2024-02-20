import getAbsolutePath from './getAbsolutePath.js';
import parseFileJson from './parserJson.js';
import parseFileYml from './parserYml.js';

const parseFile = (pathFile) => {
  const { path, extension } = getAbsolutePath(pathFile);

  if (extension === '.json') {
    return parseFileJson(path);
  }
  if (extension === '.yml' || extension === '.yaml') {
    return parseFileYml(path);
  }
  throw new Error(`Unsupported file format: ${extension}`);
};

export default parseFile;
