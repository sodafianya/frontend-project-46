import { test, expect } from '@jest/globals';

import formatJson from '../../src/formatters/json.js';

test('format diff to json', () => {
  const diff = [
    { key: 'a', type: 'added', value: 1 },
  ];

  const result = formatJson(diff);
  expect(() => JSON.parse(result)).not.toThrow();
  expect(JSON.parse(result)).toEqual(diff);
});
