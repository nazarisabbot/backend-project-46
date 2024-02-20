import fs from 'fs';

const parseFileJson = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`File not found: ${filePath}`);
    } else {
      throw error;
    }
  }
};

export default parseFileJson;
