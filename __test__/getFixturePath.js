import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (dir, filename) => join(__dirname, '__fixtures__', dir, filename);

export default getFixturePath;
