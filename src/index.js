import { readFileSync } from 'fs';
import path from 'path';

import parser from './parsers.js';
import buildDiff from './diffBuilder.js';
import getFormatter from './formatters/index.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = readFileSync(path.resolve(filepath1), 'utf-8');
  const data2 = readFileSync(path.resolve(filepath2), 'utf-8');

  const obj1 = parser(filepath1, data1);
  const obj2 = parser(filepath2, data2);

  const diff = buildDiff(obj1, obj2);
  return getFormatter(format)(diff);
};

export default genDiff;
