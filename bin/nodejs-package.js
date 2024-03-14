#!/usr/bin/env node

import runComparisonFiles from '../index.js';

const [,, filePath1, filePath2] = process.argv;

runComparisonFiles(filePath1, filePath2);
