import { test, expect } from '@jest/globals';

import formatPlain from '../../src/formatters/plain.js';

test('format simple diff', () => {
  const diff = [
    { key: 'a', type: 'added', value: 1 },
    { key: 'b', type: 'removed', value: 2 },
  ];

  const expected = "Property 'a' was added with value: 1\n" + "Property 'b' was removed";

  expect(formatPlain(diff)).toBe(expected);
});

test('format nested diff', () => {
  const diff = [
    {
      key: 'a',
      type: 'nested',
      children: [
        { key: 'b', type: 'added', value: { c: 1 } },
      ],
    },
  ];

  const expected = "Property 'a.b' was added with value: [complex value]";

  expect(formatPlain(diff)).toBe(expected);
});
