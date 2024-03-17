import fs from 'fs';
import yaml from 'js-yaml';

const parseFile = (filePath, format) => {
  const data = fs.readFileSync(filePath, 'utf8');
  try {
    switch (format) {
      case '.json':
        return JSON.parse(data);

      case '.yml':
      case '.yaml':
        return yaml.load(data);

      default:
        throw new Error(`Unsupported file format: ${format}`);
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`File not found: ${filePath}`);
    } else {
      throw error;
    }
  }
};

export default parseFile;
