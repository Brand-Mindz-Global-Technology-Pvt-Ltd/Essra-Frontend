import { test } from 'node:test';
import assert from 'node:assert/strict';
import { filterProducts, formatPrice } from '../src/utils/catalog.js';

const products = [
  { name: 'Samba Rava', category: 'breakfast', tabs: ['best-sellers'] },
  {
    name: 'Rice Flour',
    category: 'flours',
    tabs: ['best-sellers', 'new-arrivals'],
  },
];
test('search trims whitespace and ignores case', () => {
  assert.deepEqual(filterProducts(products, { query: ' RICE ' }), [
    products[1],
  ]);
});
test('category and tab filters intersect with search', () => {
  assert.deepEqual(
    filterProducts(products, {
      query: 'rice',
      category: 'flours',
      tab: 'new-arrivals',
    }),
    [products[1]],
  );
  assert.equal(
    filterProducts(products, { category: 'breakfast', tab: 'new-arrivals' })
      .length,
    0,
  );
});
test('empty searches return all products and unknown categories return none', () => {
  assert.equal(filterProducts(products).length, 2);
  assert.equal(filterProducts(products, { category: 'missing' }).length, 0);
});
test('unverified prices never become invented currency values', () => {
  assert.equal(formatPrice(null), 'Price to be confirmed');
  assert.equal(formatPrice(undefined), 'Price to be confirmed');
  assert.equal(formatPrice(NaN), 'Price to be confirmed');
  assert.equal(formatPrice(120), '₹120');
});
