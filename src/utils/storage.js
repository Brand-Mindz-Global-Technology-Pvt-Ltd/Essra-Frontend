export const STORE_KEY = 'essra-store-v1';

export function sanitizeStore(value, productIds) {
  const allowed = new Set(productIds);
  const cart = {};
  if (
    value?.cart &&
    typeof value.cart === 'object' &&
    !Array.isArray(value.cart)
  ) {
    for (const [id, quantity] of Object.entries(value.cart)) {
      if (allowed.has(id) && Number.isInteger(quantity) && quantity > 0)
        cart[id] = Math.min(quantity, 99);
    }
  }
  const wishlist = Array.isArray(value?.wishlist)
    ? [...new Set(value.wishlist.filter((id) => allowed.has(id)))]
    : [];
  return { cart, wishlist };
}

export function readStore(productIds) {
  try {
    return sanitizeStore(
      JSON.parse(localStorage.getItem(STORE_KEY)),
      productIds,
    );
  } catch {
    return { cart: {}, wishlist: [] };
  }
}
