import formatStylish from './formatStylish.js';
import plainFormatter from './formatPlain.js';
import formatJson from './formatJson.js';

export default (diff, format) => {
  switch (format) {
    case 'json':
      return formatJson(diff);
    case 'plain':
      return plainFormatter(diff);
    case 'stylish':
    default:
      return formatStylish(diff);
  }
};
