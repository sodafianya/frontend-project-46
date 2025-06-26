import { readFileSync } from 'fs';
import path from 'path';

import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

export default (filepath, data) => {
  const extension = path.extname(filepath).slice(1).toLowerCase();

  if (!parsers[extension]) {
    throw new Error(`Unsupported format: ${extension}`);
  }

  return parsers[extension](data);
};
