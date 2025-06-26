import { test, expect } from '@jest/globals';

import parser from '../src/parsers.js';

test('parse json', () => {
  const data = '{"a": 1}';
  const result = parser('file.json', data);
  expect(result).toEqual({ a: 1 });
});

test('parse yaml', () => {
  const data = 'a: 1\nb: 2';
  const result = parser('file.yml', data);
  expect(result).toEqual({ a: 1, b: 2 });
});

test('throw error on unsupported format', () => {
  expect(() => parser('file.txt', 'data')).toThrow('Unsupported format: txt');
});
