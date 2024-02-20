import path from 'path';

const getAbsolutePath = (pathFile) => ({
  path: path.resolve(process.cwd(), pathFile),
  extension: path.extname(pathFile).toLocaleLowerCase(),
});

export default getAbsolutePath;
