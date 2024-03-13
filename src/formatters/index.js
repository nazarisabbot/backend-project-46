// index.js
import stylishFormatter from './stylish.js';
import plainFormatter from './plain.js';
import formatToJson from './json.js';

export default (diff, format) => {
  switch (format) {
    case 'json':
      return formatToJson(diff);
    case 'plain':
      return plainFormatter(diff);
    case 'stylish':
    default:
      return stylishFormatter(diff);
  }
};
