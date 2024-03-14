#!/usr/bin/env node

import runComparisonFiles from '../src/index.js';

const [,, filePath1, filePath2] = process.argv;

runComparisonFiles(filePath1, filePath2);
