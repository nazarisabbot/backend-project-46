// index.js
import stylishFormatter from './stylish.js';
import plainFormatter from './plain.js';

export default (diff, format) => {
  switch (format) {
    case 'plain':
      return plainFormatter(diff);
    case 'stylish':
    default:
      return stylishFormatter(diff);
  }
};
