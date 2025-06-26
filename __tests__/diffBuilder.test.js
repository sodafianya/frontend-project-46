import { test, expect } from '@jest/globals';

import buildDiff from '../src/diffBuilder.js';

test('build flat diff', () => {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, c: 3 };

  const expected = [
    { key: 'a', type: 'unchanged', value: 1 },
    { key: 'b', type: 'removed', value: 2 },
    { key: 'c', type: 'added', value: 3 },
  ];

  expect(buildDiff(obj1, obj2)).toEqual(expected);
});

test('build nested diff', () => {
  const obj1 = { a: { b: 1 } };
  const obj2 = { a: { c: 2 } };

  const expected = [
    {
      key: 'a',
      type: 'nested',
      children: [
        { key: 'b', type: 'removed', value: 1 },
        { key: 'c', type: 'added', value: 2 },
      ],
    },
  ];

  expect(buildDiff(obj1, obj2)).toEqual(expected);
});

test('build updated value diff', () => {
  const obj1 = { a: 1 };
  const obj2 = { a: 2 };

  const expected = [
    {
      key: 'a',
      type: 'updated',
      oldValue: 1,
      newValue: 2,
    },
  ];

  expect(buildDiff(obj1, obj2)).toEqual(expected);
});
