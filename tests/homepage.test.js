import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { JSDOM } from 'jsdom';

test('homepage catalogue, overlays and persisted shopping selections work together', async () => {
  const dom = new JSDOM(
    '<!doctype html><html><head></head><body><div id="root"></div></body></html>',
    { url: 'http://localhost/', pretendToBeVisual: true },
  );
  for (const key of [
    'window',
    'document',
    'navigator',
    'HTMLElement',
    'Element',
    'HTMLSlotElement',
    'HTMLDialogElement',
    'FormData',
    'localStorage',
    'getComputedStyle',
  ]) {
    Object.defineProperty(globalThis, key, {
      configurable: true,
      value:
        key === 'getComputedStyle'
          ? dom.window.getComputedStyle.bind(dom.window)
          : dom.window[key],
    });
  }
  globalThis.requestAnimationFrame = dom.window.requestAnimationFrame.bind(
    dom.window,
  );
  globalThis.cancelAnimationFrame = dom.window.cancelAnimationFrame.bind(
    dom.window,
  );
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  dom.window.scrollTo = () => {};
  dom.window.HTMLElement.prototype.scrollIntoView = () => {};
  // jsdom has no native modal implementation; browser focus/keyboard QA remains separate.
  dom.window.HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute('open', '');
  };
  dom.window.HTMLDialogElement.prototype.close = function () {
    this.removeAttribute('open');
  };
  const server = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  let root;
  const { createElement: h, act } = await import('react');
  try {
    const { createRoot } = await import('react-dom/client');
    const { BrowserRouter, Routes, Route } = await import('react-router-dom');
    const [
      { default: Home },
      { default: MainLayout },
      { default: ShopProvider },
      { default: NotFound },
    ] = await Promise.all([
      server.ssrLoadModule('/src/pages/Home/Home.jsx'),
      server.ssrLoadModule('/src/components/layout/MainLayout.jsx'),
      server.ssrLoadModule('/src/components/common/ShopProvider.jsx'),
      server.ssrLoadModule('/src/pages/NotFound/NotFound.jsx'),
    ]);
    const tree = h(
      BrowserRouter,
      null,
      h(
        ShopProvider,
        null,
        h(
          Routes,
          null,
          h(
            Route,
            { element: h(MainLayout) },
            h(Route, { index: true, element: h(Home) }),
            h(Route, { path: '*', element: h(NotFound) }),
          ),
        ),
      ),
    );
    root = createRoot(document.getElementById('root'));
    await act(async () => {
      root.render(tree);
    });
    assert.equal(document.querySelectorAll('h1').length, 1);
    assert.equal(document.querySelectorAll('main > section').length, 12);
    assert.equal(
      document.querySelectorAll('.product-grid .product-card').length,
      4,
    );
    assert.equal(
      document.querySelector('.hero-image img').getAttribute('loading'),
      null,
    );
    assert.ok(
      [...document.querySelectorAll('img')].every(
        (image) => image.getAttribute('src') && image.hasAttribute('alt'),
      ),
    );

    await act(async () => {
      document.querySelector('[aria-label="Add Samba Rava to cart"]').click();
    });
    assert.ok(document.querySelector('[aria-label="Shopping cart, 1 items"]'));
    assert.equal(
      JSON.parse(localStorage.getItem('essra-store-v1')).cart['samba-rava'],
      1,
    );
    await act(async () => {
      document
        .querySelector('[aria-label="Save Samba Rava to wishlist"]')
        .click();
    });
    assert.ok(document.querySelector('[aria-label="Wishlist, 1 items"]'));
    assert.deepEqual(
      JSON.parse(localStorage.getItem('essra-store-v1')).wishlist,
      ['samba-rava'],
    );

    await act(async () => {
      document.querySelector('[aria-label="Shopping cart, 1 items"]').click();
    });
    assert.ok(document.querySelector('dialog[open]'));
    assert.match(
      document.querySelector('dialog').textContent,
      /Subtotal: ₹199/,
    );
    await act(async () => {
      document
        .querySelector('[aria-label="Increase Samba Rava quantity"]')
        .click();
    });
    assert.equal(
      JSON.parse(localStorage.getItem('essra-store-v1')).cart['samba-rava'],
      2,
    );
    await act(async () => {
      document
        .querySelector('[aria-label="Remove Samba Rava from cart"]')
        .click();
    });
    assert.match(
      document.querySelector('dialog').textContent,
      /Your cart is waiting/,
    );
    await act(async () => {
      document.querySelector('[aria-label="Close panel"]').click();
    });
    assert.equal(document.querySelector('dialog[open]'), null);

    document.querySelector('#product-search').value = 'rice';
    await act(async () => {
      document
        .querySelector('form[role="search"]')
        .dispatchEvent(
          new dom.window.Event('submit', { bubbles: true, cancelable: true }),
        );
    });
    assert.equal(
      document.querySelectorAll('.product-grid .product-card').length,
      1,
    );
    assert.match(
      document.querySelector('.product-grid').textContent,
      /Rice Flour/,
    );
    assert.match(window.location.search, /q=rice/);
    document.querySelector('#product-search').value = 'no-such-product';
    await act(async () => {
      document
        .querySelector('form[role="search"]')
        .dispatchEvent(
          new dom.window.Event('submit', { bubbles: true, cancelable: true }),
        );
    });
    assert.match(
      document.querySelector('#featured-products').textContent,
      /No products found/,
    );
    await act(async () => {
      document.querySelector('.filter-summary a').click();
    });
    assert.equal(
      document.querySelectorAll('.product-grid .product-card').length,
      4,
    );

    await act(async () => {
      document
        .querySelector('a[href="/?category=flours#featured-products"]')
        .click();
    });
    assert.equal(
      document.querySelectorAll('.product-grid .product-card').length,
      2,
    );
    await act(async () => {
      [...document.querySelectorAll('.product-tabs button')]
        .find((button) => button.textContent === 'Customer Favorites')
        .click();
    });
    assert.equal(
      document.querySelectorAll('.product-grid .product-card').length,
      2,
    );
    assert.equal(
      document.querySelector('.product-tabs [aria-pressed="true"]').textContent,
      'Customer Favorites',
    );
    await act(async () => {
      document.querySelector('.product-grid a').click();
    });
    assert.match(
      document.querySelector('#panel-title').textContent,
      /Rice Flour/,
    );
    await act(async () => {
      document
        .querySelector('dialog')
        .dispatchEvent(new dom.window.Event('cancel', { cancelable: true }));
    });
    assert.equal(document.querySelector('dialog[open]'), null);

    // Reloading the provider restores saved data rather than resetting the wishlist.
    await act(async () => {
      root.unmount();
    });
    root = createRoot(document.getElementById('root'));
    await act(async () => {
      root.render(tree);
    });
    assert.ok(document.querySelector('[aria-label="Wishlist, 1 items"]'));
    await act(async () => {
      window.history.pushState({}, '', '/missing-page');
      window.dispatchEvent(new dom.window.PopStateEvent('popstate'));
    });
    assert.match(
      document.querySelector('h1').textContent,
      /isn’t in our pantry/,
    );
    assert.equal(
      document.querySelector('meta[name="robots"]').content,
      'noindex, nofollow',
    );
  } finally {
    if (root)
      await act(async () => {
        root.unmount();
      });
    await server.close();
    dom.window.close();
  }
});
