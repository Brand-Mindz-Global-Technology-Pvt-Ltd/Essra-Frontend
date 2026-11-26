import { useState } from 'react';
import { products } from '@/data/products.data';
import { ShopContext } from '@/hooks/ShopContext';
import { readStore, STORE_KEY } from '@/utils/storage';

export default function ShopProvider({ children }) {
  const [store, setStore] = useState(() =>
    readStore(products.map((p) => p.id)),
  );
  const [message, setMessage] = useState('');
  const [storageError, setStorageError] = useState(false);

  function commitStore(next) {
    setStore(next);
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(next));
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  }

  function addToCart(id) {
    commitStore({
      ...store,
      cart: { ...store.cart, [id]: Math.min((store.cart[id] || 0) + 1, 99) },
    });
    const product = products.find((p) => p.id === id);
    setMessage(`${product.name} added to your cart.`);
  }
  function setQuantity(id, quantity) {
    const cart = { ...store.cart };
    if (quantity <= 0) delete cart[id];
    else cart[id] = Math.min(quantity, 99);
    commitStore({ ...store, cart });
  }
  function toggleWishlist(id) {
    commitStore({
      ...store,
      wishlist: store.wishlist.includes(id)
        ? store.wishlist.filter((item) => item !== id)
        : [...store.wishlist, id],
    });
  }
  return (
    <ShopContext.Provider
      value={{
        ...store,
        addToCart,
        setQuantity,
        toggleWishlist,
        storageError,
        cartCount: Object.values(store.cart).reduce(
          (sum, quantity) => sum + quantity,
          0,
        ),
      }}
    >
      {children}
      <div className="sr-only" role="status" aria-live="polite">
        {message}
      </div>
    </ShopContext.Provider>
  );
}
