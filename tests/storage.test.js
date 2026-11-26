import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sanitizeStore, readStore } from '../src/utils/storage.js';

test('saved data accepts only known products and valid quantities', () => {
  const result = sanitizeStore(
    {
      cart: { rice: 500, rava: -2, unknown: 4, flour: '2' },
      wishlist: ['rice', 'rice', 'unknown', null],
    },
    ['rice', 'rava', 'flour'],
  );
  assert.deepEqual(result, { cart: { rice: 99 }, wishlist: ['rice'] });
});
test('missing or malformed state produces safe empty selections', () => {
  for (const value of [
    null,
    undefined,
    'broken',
    3,
    { cart: [], wishlist: {} },
  ]) {
    assert.deepEqual(sanitizeStore(value, ['rice']), {
      cart: {},
      wishlist: [],
    });
  }
});
test('unavailable browser storage does not crash the application', () => {
  assert.deepEqual(readStore(['rice']), { cart: {}, wishlist: [] });
});
