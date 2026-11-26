# ESSRA Frontend

A local React implementation of the twelve-section ESSRA homepage specified in the supplied brief. The workspace was empty. **No approved reference screenshot, ESSRA logo, packaging, photography, production domain, prices or testimonials were attached.** This is a functional development preview; pixel accuracy and launch readiness cannot be claimed until those inputs are supplied and visual QA is completed.

## Stack and commands

React 19, Vite 7, JavaScript, Tailwind CSS 4 (Vite plugin and CSS-first theme tokens), React Router, Lucide and Swiper. No animation library or backend is included. Use Node 22.22.2+ within Node 22, or Node 24.15+ LTS (the development test runner uses jsdom 31). Exact installed versions are recorded in `package-lock.json`.

```sh
npm ci
npm run dev
npm run lint
npm test
npm run format:check
npm run build
npm run preview
```

On Windows with PowerShell script execution disabled, use `npm.cmd` in place of `npm`. In a restricted workspace, add `--cache .npm-cache` to installation commands. Font files are locally hosted; runtime does not require Google Fonts or image services.

## Architecture

```text
public/                      Fixed-URL crawler files
scripts/                     SEO generation and replaceable placeholder generator
src/
  assets/home/images/        hero, categories, products, introduction, combo-offers,
                             ingredients, process, signature-products, blogs
  assets/home/icons/         Approved homepage illustrations when supplied
  assets/shared/             logos, icons, images, patterns used across sections
  assets/fonts/              Local font files and licences
  components/ui/             Reusable cards, headings, buttons and carousels
  components/layout/         Announcement, header, mobile menu, layout and footer
  components/common/         Metadata, shop provider, panels, error boundary, scroll
  data/                      Home content, catalogue, categories, navigation, site
  hooks/                     Shop context consumer
  utils/                     Search/filter/price and storage validation
  pages/Home/sections/       One JSX file per homepage section
  pages/Home/Home.jsx        Imports and arranges the twelve sections only
  pages/NotFound/            Unknown-route fallback
  routes/AppRoutes.jsx      Central routes and lazy page loading
  styles/                   Theme tokens and shared responsive styling
tests/                       Catalogue and persisted-state boundary tests
```

No unused services folder or dummy API has been added. Put future API adapters in `src/services/` when an integration exists.

## Section order and component mapping

1. Hero — `SectionHeading`, `Button`, `Container`
2. Product benefits — labelled Lucide outline icons
3. Shop by category — `CategoryCard`
4. Featured products — `ProductCard`, `RatingStars`, functional filters
5. Brand introduction — `ImageTextSection`
6. Combo offers — `Carousel`, `Button`
7. Ingredients — `IngredientCard`
8. Our process — `ProcessCard`, `Carousel`
9. Signature products — `ImageTextSection` signature variant, `Carousel`
10. Everyday essentials — `ProductCarousel`, compact `ProductCard`
11. Testimonials — `TestimonialCard`, `Carousel` when approved reviews exist
12. Food journal — `BlogCard`

All carousel types share `CarouselControls`. A single supplied offer/signature item has disabled navigation rather than invented duplicate slides. Four process cards also disable navigation when all four fit; controls activate at smaller widths. No testimonials are fabricated to populate a slider.

## Content and asset updates

Edit `src/data/home.data.js` for section copy and section-specific imagery, `products.data.js` for products, `categories.data.js` for category labels, and `site.data.js` for business and SEO configuration. Product names come from the brief; category names, article titles, tab assignments and descriptive copy are provisional and need client approval.

Replace labelled SVG asset placeholders with approved WebP/AVIF photographs or transparent product images in the corresponding asset directory. Import each image in its data file and update its alt text. Do not overwrite original packaging or duplicate an image in several folders. Preserve intrinsic image dimensions and meaningful alt text. The hero has high fetch priority and is not lazy-loaded; other images are lazy-loaded. The SVG line pattern is a provisional decorative asset. Replace Lucide category icons with supplied thin-line illustrations through each category's `image` field. Set `site.logo` to the imported original logo; the current wordmark is a typographic placeholder.

Local fonts include their upstream licences. For future images provide responsive `srcSet` variants when the source dimensions justify it; the current small SVG placeholders are resolution-independent.

### Reusing components

```jsx
<ProductCard product={product} variant="compact" />
<SectionHeading title="Everyday Essentials," highlight="Naturally Good." />
<ImageTextSection content={sectionData} variant="signature" />
```

Colour accents use named `tone` tokens on products. Design changes belong in shared components and `styles/`; content belongs in data files. Change the central tokens in `variables.css` to adjust the palette, fonts, widths, spacing, radii and transitions.

Add a section by creating a descriptive file in `pages/Home/sections/`, adding its content in `home.data.js`, and arranging the component in `Home.jsx`. Add a future page in its own `pages/PageName/` directory with a `sections/` subdirectory, then register a lazy route in `AppRoutes.jsx` inside the shared layout.

## Frontend behaviour

- Header search and category links filter the local catalogue using URL parameters. Product filter buttons support pressed states; all filters intersect. Clear filters to return to the complete catalogue.
- Product, article, support, cart, wishlist and account views use accessible native modal dialogs driven by query parameters. These keep the current scope to one homepage. Escape and the close button dismiss them. Browser back/forward and direct query URLs work.
- Cart quantities and wishlist selections persist in `localStorage` under `essra-store-v1`. Corrupt data and stale product IDs are rejected. Quantities are bounded to 99. Storage failure shows an explanatory message.
- No checkout, payment, order confirmation, sign-in or submission backend is simulated. Unavailable contact details and policies are disclosed. Prices and reviews remain `null`; approved prices render in INR. There is no contact form in this homepage brief.
- Product detail panels show a descriptive placeholder until approved product metadata is supplied. Journal links open clearly labelled draft articles. Recipes and Blogs currently target the journal section.

## Missing assets and approval inventory

| Item                                             | Current treatment                                                      |
| ------------------------------------------------ | ---------------------------------------------------------------------- |
| Approved homepage screenshot                     | Not attached; comparison and exact crop/spacing verification pending   |
| Original ESSRA logo                              | Temporary text wordmark                                                |
| Hero meal and product composition                | Labelled, proportioned SVG placeholder                                 |
| Four product packaging images                    | Shared neutral placeholder; no packaging fabricated                    |
| Eight category names/illustrations               | Provisional labels and thin Lucide outlines                            |
| Brand photograph/stamp                           | Labelled dark placeholder; stamp omitted pending original asset        |
| Combo banner/edge decorations                    | Labelled artwork placeholder; reference offer disclosed as unconfirmed |
| Ingredient/process/signature/journal photography | Labelled SVG placeholders in matching folders                          |
| Product price, size, ingredients, reviews        | Unset; no invented commercial data                                     |
| Testimonials                                     | Honest empty state; reusable review component ready                    |
| Manufacturing statements                         | Brief-supplied labels marked as awaiting verification                  |
| Business details/certifications/socials          | Unset; no invented address or certifications                           |
| Shipping announcement/policies/articles          | Clearly provisional or pending                                         |
| Domain, backend and approved product schema      | Awaiting production configuration                                      |

## SEO and deployment

Copy `.env.example` to `.env.local` and configure the verified `VITE_SITE_URL` HTTPS origin. Canonical and social URL tags are omitted until an origin exists. The page defaults to `noindex` and `public/robots.txt` disallows crawling for this unapproved preview. Query-driven overlays and filtered URLs stay `noindex`. Do not configure production indexing until placeholder content and product/process claims are approved.

After approval, generate crawler files using the actual domain:

```sh
npm run seo:generate -- https://YOUR-ACTUAL-DOMAIN
npm run build
```

The generator deliberately refuses to invent a domain. `sitemap.xml` is absent until it runs. Product/review/offer structured data is intentionally omitted while prices, product metadata and reviews remain unverified. Add schema only from approved catalogue data. Metadata uses React 19 document metadata support. For launch SEO, add a prerender/SSR step so title, description, canonical, social tags and content are present in the initial HTML; the current development preview is client-rendered.

Deploy `dist/` to static hosting with an SPA fallback to `index.html` for all non-asset routes. For Netlify use a rewrite `/* /index.html 200`; for nginx use `try_files $uri $uri/ /index.html;`. The Vite dev/preview server already provides the fallback. Set a custom Vite `base` if deploying under a subpath and coordinate the router basename. This task builds locally and does not publish a hosted site.

## Verification and remaining launch checks

Run lint, formatting, boundary tests and the production build. All eight tests passed during implementation, including a DOM integration test for the twelve-section composition, search/empty results, category and tab filters, product dialogs, cart changes, wishlist persistence and the 404 route. Unit tests cover INR formatting, invalid saved data and unavailable storage. The DOM test stubs native dialog opening; it does not verify native focus trapping, image layout or carousel geometry. A production build checks imports and asset resolution.

The session has no connected browser and the in-app browser is unavailable, so no browser screenshots, Lighthouse scores, responsive visual assertions or cross-browser pass claims are included. Once browser access and the approved reference are available, compare full-page screenshots at the reference width and inspect 1920, 1440, 1280, 1024, 768, 480 and 375px. Verify search, category/tab combinations, empty results, cart quantities, persisted wishlist, Escape/focus handling, all modal links, mobile menu, slider swipes, reduced motion, image loading, a single H1, metadata and 404 behaviour. Compare spacing, crops, patterns and type against the approved reference before launch.
#   E s s r a - F r o n t e n d 
 
 
#   E s s r a - F r o n t e n d  
 