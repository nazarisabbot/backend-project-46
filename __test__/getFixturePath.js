import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (dir, filename) => path.join(__dirname, '__fixtures__', dir, filename);

export default getFixturePath;