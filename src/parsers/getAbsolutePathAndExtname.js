import path from 'path';

const getAbsolutePathAndExtname = (pathFile) => ({
  path: path.resolve(process.cwd(), pathFile),
  extension: path.extname(pathFile).toLocaleLowerCase(),
});

export default getAbsolutePathAndExtname;
