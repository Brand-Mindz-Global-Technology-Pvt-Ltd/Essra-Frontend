import { useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { X, Minus, Plus, Trash2, ShoppingBag, Heart } from 'lucide-react';
import { products } from '@/data/products.data';
import { home } from '@/data/home.data';
import { supportLinks } from '@/data/site.data';
import { useShop } from '@/hooks/ShopContext';
import { formatPrice } from '@/utils/catalog';
import Button from '@/components/ui/Button';

export default function ShopPanels() {
  const [params, setParams] = useSearchParams();
  const ref = useRef(null);
  const {
    cart,
    wishlist,
    addToCart,
    setQuantity,
    toggleWishlist,
    storageError,
  } = useShop();
  const productSlug = params.get('product');
  const articleSlug = params.get('article');
  const policyKey = params.get('policy');
  const view = params.get('view');
  const open = Boolean(productSlug || articleSlug || policyKey || view);
  const product = products.find((item) => item.slug === productSlug);
  const article = home.journal.items.find((item) => item.slug === articleSlug);
  const policy = supportLinks.find((item) => item.key === policyKey);
  const title = productSlug
    ? product?.name || 'Product unavailable'
    : articleSlug
      ? article?.title || 'Story unavailable'
      : policyKey
        ? policy?.label || 'Information unavailable'
        : view === 'cart'
          ? 'Your cart'
          : view === 'wishlist'
            ? 'Your wishlist'
            : view === 'account'
              ? 'Your account'
              : 'Information unavailable';

  function close() {
    const next = new URLSearchParams(params);
    ['view', 'product', 'article', 'policy'].forEach((key) => next.delete(key));
    setParams(next, { replace: true, preventScrollReset: true });
  }
  useEffect(() => {
    const dialog = ref.current;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const cartProducts = products.filter((item) => cart[item.id]);
  const wishProducts = products.filter((item) => wishlist.includes(item.id));
  const hasUnpricedItems = cartProducts.some((item) => item.price == null);
  return (
    <dialog
      ref={ref}
      className="shop-dialog"
      aria-labelledby="panel-title"
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClick={(event) => {
        if (event.target === ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            close();
        }
      }}
    >
      <div className="dialog-heading">
        <h2 id="panel-title">{title}</h2>
        <button
          className="icon-button"
          type="button"
          onClick={close}
          aria-label="Close panel"
        >
          <X size={21} />
        </button>
      </div>
      <div className="dialog-body">
        {storageError && (
          <p role="status" className="notice">
            Browser storage is unavailable. Your selections will only last for
            this visit.
          </p>
        )}
        {product && (
          <div className="product-detail">
            <img
              src={product.image}
              alt={product.imageAlt}
              width="400"
              height="420"
            />
            <div>
              <p className="eyebrow">ESSRA PANTRY</p>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{formatPrice(product.price)}</p>
              <Button onClick={() => addToCart(product.id)}>Add to Cart</Button>
              <button
                className="text-link detail-wishlist"
                type="button"
                onClick={() => toggleWishlist(product.id)}
              >
                <Heart
                  size={17}
                  fill={wishlist.includes(product.id) ? 'currentColor' : 'none'}
                />
                {wishlist.includes(product.id)
                  ? 'Remove from wishlist'
                  : 'Save to wishlist'}
              </button>
            </div>
          </div>
        )}
        {productSlug && !product && (
          <p>
            This product could not be found. Close this panel to browse the
            catalogue.
          </p>
        )}
        {article && (
          <article className="article-preview">
            <img
              src={article.image}
              alt={article.imageAlt}
              width="640"
              height="420"
            />
            <p className="eyebrow">EDITORIAL PLACEHOLDER</p>
            <p>{article.description}</p>
            <p>{article.body}</p>
          </article>
        )}
        {articleSlug && !article && <p>This story could not be found.</p>}
        {policyKey && (
          <p>{policy?.text || 'The requested information is not available.'}</p>
        )}
        {view === 'account' && (
          <div className="empty-state">
            <p>Account services are not connected yet.</p>
            <p>
              You can explore products and save your cart and wishlist in this
              browser. Sign-in will be added with the store backend.
            </p>
            <Button onClick={close}>Continue Exploring</Button>
          </div>
        )}
        {(view === 'cart' || view === 'wishlist') && (
          <>
            {(view === 'cart' ? cartProducts : wishProducts).length === 0 ? (
              <div className="empty-state">
                <ShoppingBag size={34} strokeWidth={1} />
                <h3>
                  {view === 'cart'
                    ? 'Your cart is waiting.'
                    : 'Save a little goodness.'}
                </h3>
                <p>
                  {view === 'cart'
                    ? 'Explore the pantry and add a favourite.'
                    : 'Tap the heart on a product to save it here.'}
                </p>
                <Button onClick={close}>Continue Exploring</Button>
              </div>
            ) : (
              <ul className="cart-list">
                {(view === 'cart' ? cartProducts : wishProducts).map((item) => (
                  <li key={item.id}>
                    <img src={item.image} alt="" width="74" height="84" />
                    <div>
                      <Link
                        to={`/?product=${item.slug}`}
                        className="cart-product-name"
                      >
                        {item.name}
                      </Link>
                      <p>{formatPrice(item.price)}</p>
                      {view === 'cart' ? (
                        <div className="quantity-control">
                          <button
                            type="button"
                            className="icon-button"
                            aria-label={`Decrease ${item.name} quantity`}
                            onClick={() =>
                              setQuantity(item.id, cart[item.id] - 1)
                            }
                          >
                            <Minus size={14} />
                          </button>
                          <span aria-label={`${item.name} quantity`}>
                            {cart[item.id]}
                          </span>
                          <button
                            type="button"
                            className="icon-button"
                            aria-label={`Increase ${item.name} quantity`}
                            disabled={cart[item.id] >= 99}
                            onClick={() =>
                              setQuantity(item.id, cart[item.id] + 1)
                            }
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      ) : (
                        <Button onClick={() => addToCart(item.id)}>
                          Add to Cart
                        </Button>
                      )}
                    </div>
                    <button
                      type="button"
                      className="icon-button"
                      aria-label={`Remove ${item.name} from ${view}`}
                      onClick={() =>
                        view === 'cart'
                          ? setQuantity(item.id, 0)
                          : toggleWishlist(item.id)
                      }
                    >
                      <Trash2 size={17} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {view === 'cart' && cartProducts.length > 0 && (
              <div className="cart-summary">
                <p>
                  {hasUnpricedItems
                    ? 'Total unavailable until product prices are confirmed.'
                    : `Subtotal: ${formatPrice(cartProducts.reduce((sum, item) => sum + item.price * cart[item.id], 0))}`}
                </p>
                <p className="notice">
                  Preview only. Checkout and payments are not available.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </dialog>
  );
}
