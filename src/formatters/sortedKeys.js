export default (keys) => {
  const newSortedKeys = [...keys];
  return newSortedKeys.sort((a, b) => {
    const alphaSort = a.replace(/^\W+/, '').localeCompare(b.replace(/^\W+/, ''));
    if (alphaSort !== 0) {
      return alphaSort;
    }

    const postfixA = a.replace(/^\W*\w+/, '');
    const postfixB = b.replace(/^\W*\w+/, '');

    if (/^\d/.test(postfixA) && /^\d/.test(postfixB)) {
      return Number(postfixA) - Number(postfixB);
    }

    return a.localeCompare(b);
  });
};
