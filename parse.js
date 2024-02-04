import fs from 'fs';
import path from 'path';

const parseFile = (filePath) => {
  const relativePath = filePath;
  const absolutePath = path.resolve(process.cwd(), relativePath);

  const fileExtension = path.extname(absolutePath).toLocaleLowerCase();

  if (fileExtension === '.json') {
    const data = fs.readFileSync(absolutePath, 'utf-8');
    return JSON.parse(data);
  } else {
    console.error('Unsupported file format');
    return null;
  }

  
};

export default parseFile;