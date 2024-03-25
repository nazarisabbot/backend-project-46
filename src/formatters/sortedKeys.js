const sortedData = (arr) => {
  return [...arr].sort((a, b) => {
    const matchA = a.key.match(/([^0-9]*)(\d*)/);
    const matchB = b.key.match(/([^0-9]*)(\d*)/);

    const [, keyA, numA = ''] = matchA;
    const [, keyB, numB = ''] = matchB;

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;

    if (numA < numB) return -1;
    if (numA > numB) return 1;

    return 0;
  });
};

export default sortedData;
