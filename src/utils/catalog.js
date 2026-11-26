export function filterProducts(
  products,
  { query = '', category = '', tab = '' } = {},
) {
  const normalizedQuery = query.trim().toLocaleLowerCase('en-IN');
  return products.filter(
    (product) =>
      (!normalizedQuery ||
        `${product.name} ${product.category}`
          .toLocaleLowerCase('en-IN')
          .includes(normalizedQuery)) &&
      (!category || product.category === category) &&
      (!tab || product.tabs.includes(tab)),
  );
}

export function formatPrice(price) {
  return typeof price === 'number' && Number.isFinite(price)
    ? new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
      }).format(price)
    : 'Price to be confirmed';
}
