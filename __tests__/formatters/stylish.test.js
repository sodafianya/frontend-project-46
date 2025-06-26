import { test, expect } from '@jest/globals';

import formatStylish from '../../src/formatters/stylish.js';

test('format simple diff', () => {
  const diff = [
    { key: 'a', type: 'added', value: 1 },
    { key: 'b', type: 'removed', value: 2 },
  ];

  const expected = `{
  + a: 1
  - b: 2
}`;

  expect(formatStylish(diff)).toBe(expected);
});

test('format nested diff', () => {
  const diff = [
    {
      key: 'a',
      type: 'nested',
      children: [
        { key: 'b', type: 'added', value: 1 },
      ],
    },
  ];

  const expected = `{
    a: {
      + b: 1
    }
}`;

  expect(formatStylish(diff)).toBe(expected);
});
