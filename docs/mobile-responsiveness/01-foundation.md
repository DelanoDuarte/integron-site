# 01 — Foundation Tasks (Global)

[← Back to overview](./README.md)

Do these first: they fix most section-level problems before you touch individual sections.

- [ ] **F-01 (P0) Find and remove horizontal overflow.**
  In the console at 360 px, run:

  ```js
  [...document.querySelectorAll('*')].filter(e => e.getBoundingClientRect().right > innerWidth)
  ```

  Fix each element it returns. Don't hide the problem with `overflow-x: hidden` on `body`, because that breaks `position: sticky`. Use `overflow-x: clip` only as a last resort.

- [ ] **F-02 (P0) Use one standard container.**
  Every section wrapper becomes:

  ```html
  <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">…</div>
  ```

  Remove fixed widths (`w-[NNNpx]`, `min-w-[...]`) from layout wrappers **(verify)**.

- [ ] **F-03 (P0) Make the type scale fluid.**
  - H1: `text-3xl sm:text-5xl lg:text-6xl text-balance`
  - H2: `text-2xl sm:text-3xl lg:text-4xl text-balance`
  - Body text: at least `text-base` (16 px)
  - Mockup labels: never below `text-xs` (12 px)

- [ ] **F-04 (P0) Tighten section spacing on mobile.**
  Use `py-12 sm:py-16 lg:py-24` instead of one large desktop padding, and `gap-6 lg:gap-10` in grids.

- [ ] **F-05 (P0) Make tap targets at least 44 × 44 px.**
  - Buttons: `min-h-11 px-5`
  - Nav and footer links: `py-3` or `inline-flex min-h-11 items-center`
  - Keep 8 px or more between neighbouring targets.

- [ ] **F-06 (P1) Handle safe areas (notched iPhones).**
  Change the viewport meta to:

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  ```

  Pad fixed bottom elements with `pb-[env(safe-area-inset-bottom)]`. Never add `maximum-scale` or `user-scalable=no`, which block zoom.

- [ ] **F-07 (P1) Fix full-height sections for mobile browser toolbars.**
  Replace `h-screen` / `min-h-screen` with `min-h-[100svh]` **(verify)**.

- [ ] **F-08 (P1) Stop long strings from breaking layout.**
  - Set `<html lang="pt-BR">` and use `break-words` on text blocks.
  - Add `truncate` to URLs and 44-digit NF-e access keys.
  - Use a non-breaking hyphen (`NF&#8209;e`) so "NF-e" never splits across lines.

- [ ] **F-09 (P2) Render only one logo per theme.**
  The page exposes both `integron-logo.svg` and `integron-logo-dark.svg`. Use `dark:hidden` / `hidden dark:block` (or `<picture>` with `prefers-color-scheme`) so only one is visible and announced.
