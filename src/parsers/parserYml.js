import fs from 'fs';
import yaml from 'js-yaml';

const parseFileYml = (filePath) => {
  try {
    const doc = yaml.load(fs.readFileSync(filePath, 'utf8'));
    return doc;
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`File not found: ${filePath}`);
    } else {
      throw error;
    }
  }
};

export default parseFileYml;
