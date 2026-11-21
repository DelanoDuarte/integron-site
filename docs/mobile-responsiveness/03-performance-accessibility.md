# 03 — Mobile Performance and Accessibility

[← Back to overview](./README.md)

**Targets:**

| Metric | Target |
| --- | --- |
| Lighthouse mobile — Performance | ≥ 90 |
| Lighthouse mobile — Accessibility | ≥ 95 |
| LCP (Largest Contentful Paint) | < 2.5 s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| INP (Interaction to Next Paint) | < 200 ms |

## Tasks

- [ ] **PA-01 (P0) Record a baseline.**
  Run Lighthouse in mobile mode on the current site before any change, and save the report for the before/after comparison.

- [ ] **PA-02 (P0) Stop images from shifting layout.**
  Every `<img>` gets explicit `width` and `height` to prevent CLS. Use `loading="lazy"` below the fold and `fetchpriority="high"` on the hero's largest element.

- [ ] **PA-03 (P1) Use a production Tailwind build.**
  CSS should be compiled and minified, with content scanning that covers the JTE templates:

  ```js
  // Tailwind v3 — tailwind.config.js
  content: ['./src/main/jte/**/*.jte']
  ```

  ```css
  /* Tailwind v4 — main CSS entry */
  @source "../jte";
  ```

  Make sure the Play CDN script isn't used in production **(verify)**.

- [ ] **PA-04 (P1) Load fonts efficiently.**
  Use `font-display: swap`, preload only the 1–2 weights above the fold, and use a Latin subset.

- [ ] **PA-05 (P1) Fix alt text.**
  Mockup images currently have empty `alt`. Give the mockup container `role="img"` with one descriptive `aria-label` (for example, "Painel de validações de NF-e"), and set `aria-hidden="true"` on its fake rows so screen readers skip them. The logo gets `alt="Integron"`.

- [ ] **PA-06 (P1) Make the mobile menu accessible.**
  Move focus into the panel on open and return it to the button on close. Esc closes the panel, and `aria-expanded` stays in sync.

- [ ] **PA-07 (P2) Respect reduced motion.**
  With `motion-reduce:` variants, disable animations and video autoplay.

- [ ] **PA-08 (P2) Check contrast on dark green backgrounds.**
  Muted text on the `#10241A` theme colour must reach 4.5:1.
