# 02 — Section-by-Section Tasks

[← Back to overview](./README.md)

The sections follow the order of the page. The header, the dashboard mockups and the cookie banner are the highest-risk areas.

## Header and navigation

- [ ] **H-01 (P0) Add a mobile menu below `md`.**
  No hamburger menu currently appears.
  - Hide the four anchors (O Problema, Funcionalidades, Como funciona, Preços) and "Falar com vendas" with `hidden md:flex`.
  - Add a `md:hidden` menu button with `aria-expanded` and `aria-controls`.
  - Open a full-width panel with the links stacked (`py-3`) and the CTA as a full-width button.
  - Vanilla JS (about 20 lines) is enough; close the panel on link tap and on Esc.

- [ ] **H-02 (P1) Keep the header compact.**
  Use `sticky top-0 z-50` with a height of 64 px or less on mobile and a logo height of `h-7`. Add `scroll-mt-20` to every anchored section so its heading doesn't land under the header.

- [ ] **H-03 (P2) Keep one CTA visible on mobile.**
  A small "Contato" button next to the menu icon keeps the conversion path one tap away.

## Hero

- [ ] **HR-01 (P0) Stack the columns.**
  Use `grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`, with the text first and the mockup after.

- [ ] **HR-02 (P0) Make the CTAs full width on phones.**
  Use `flex flex-col sm:flex-row gap-3`, with each button `w-full sm:w-auto` and the primary button ("Solicitar diagnóstico gratuito") on top.

- [ ] **HR-03 (P1) Let the badge wrap cleanly.**
  "Validação pré-SEFAZ — IBS e CBS em roadmap" is long for 360 px. Allow `whitespace-normal text-xs`, or show a shorter label below `sm`.

- [ ] **HR-04 (P1) Balance the H1.**
  Apply `text-balance` and the non-breaking "NF‑e" from F-08 to "Pare rejeições de NF-e antes que aconteçam".

## Dashboard mockups (hero dashboard and "Diagnóstico — NF-e 48.172")

- [ ] **D-01 (P0) Build a phone layout for each mockup.**
  - Hide the 7-icon sidebar below `sm` (`hidden sm:flex`).
  - Show the counters (Validadas hoje 142, Alertas 9, Críticas 3) as a compact `grid-cols-3`.
  - Below `sm`, render table rows as stacked cards (NF-e number, finding, status badge); keep the real table from `sm` up.
  - This beats shrinking the desktop mockup: text stays legible and dark mode keeps working.

- [ ] **D-02 (P0) Stop the table from setting the page width.**
  Wrap tables in `overflow-x-auto` and add `min-w-0` to the grid or flex children that hold them. Without `min-w-0`, a grid child won't shrink below its content.

- [ ] **D-03 (P1) Truncate the fake URL bar.**
  Add `truncate` to `app.integron.com.br/validacoes`.

- [ ] **D-04 (P1) Keep the score bar readable.**
  The 87% bar and its badges keep labels at `text-xs` or larger and the bar at least 8 px tall.

## ERP integrations strip

- [ ] **E-01 (P1) Let the five logos wrap.**
  TOTVS Protheus, SAP S/4HANA, Oracle EBS, Sankhya and Senior Sistemas go in `flex flex-wrap justify-center gap-x-8 gap-y-4`, with logos at `h-6 sm:h-8`. This avoids an orphaned last item in a 2-column grid. The API REST / SFTP line goes below in `text-sm text-center`.

## Stats row

- [ ] **S-01 (P1) Stack the three stats.**
  Use `grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x`. On phones, put the number on the left and the label on the right to save height. Keep "< 1 s", "1–3 h" and "R$ 200 mil" on one line with `whitespace-nowrap`.

## O Problema

- [ ] **P-01 (P0) Stack the cards.**
  Use `grid-cols-1 md:grid-cols-3`, with card padding `p-5 sm:p-8`.

- [ ] **P-02 (P1) Simplify the four-step cascade list.**
  Reduce nesting indentation to `pl-4` on mobile. Make any horizontal arrows or connectors vertical below `md`.

- [ ] **P-03 (P2) Shrink the 01–03 numerals.**
  Use `text-4xl sm:text-6xl`.

## Como funciona

- [ ] **C-01 (P0) Make the four steps a vertical timeline on mobile.**
  Use `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`. Connectors become a left border on phones (`border-l-2 pl-6`) and a top border on `lg` (`lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-6`).

- [ ] **C-02 (P1) Apply D-01 and D-02 to the diagnosis panel.**

## Demo video

- [ ] **V-01 (P0) Make the embed responsive.**

  ```html
  <div class="aspect-video w-full">
    <iframe class="h-full w-full" loading="lazy" …></iframe>
  </div>
  ```

  Remove any fixed `width` / `height` attributes **(verify)**.

- [ ] **V-02 (P1) Don't autoplay on phones.**
  The Vimeo embed autoplays, muted and looped, which costs mobile data and main-thread time. Show a poster image with a play button and load the iframe on tap (a lite embed). Keep autoplay only from `md` up, and only when `prefers-reduced-motion` is not set.

- [ ] **V-03 (P1) Stack the two buttons under the video** at full width, as in HR-02.

## Funcionalidades

- [ ] **FT-01 (P0) Make the six cards responsive.**
  Use `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.

- [ ] **FT-02 (P2) Move status out of the heading.**
  "IBS/CBS — Em desenvolvimento" becomes an "IBS/CBS" heading plus a small "Em desenvolvimento" badge, so the heading doesn't wrap.

## Planos

- [ ] **PR-01 (P0) Stack the three plans.**
  Use `grid-cols-1 lg:grid-cols-3`, with `max-w-md mx-auto lg:max-w-none` so cards don't stretch on tablets.

- [ ] **PR-02 (P1) Remove desktop emphasis on phones.**
  Drop any `scale-105` on Business below `lg` **(verify)**. Make sure the "Mais completo" badge isn't clipped by an `overflow-hidden` parent.

- [ ] **PR-03 (P2) Consider showing Business first on mobile.**
  Use `order-first lg:order-none` if it's the plan you want leads to see.

## Final CTA

- [ ] **CT-01 (P1) Fit the CTA block to phones.**
  The button is full width, padding is reduced (`p-6 sm:p-12`), and "Sem cartão de crédito" sits directly under the button.

## Footer

- [ ] **FO-01 (P1) Stack the footer.**
  Use `flex flex-col gap-6 sm:flex-row sm:justify-between`, with links in a `grid grid-cols-2` on phones and 44 px tap height. While the cookie banner is visible, add bottom padding equal to its height.

## Cookie banner

- [ ] **CK-01 (P0) Keep the banner compact so it never covers CTAs.**
  Use `fixed inset-x-0 bottom-0` with `text-sm`. Put the two buttons side by side in `grid grid-cols-2 gap-2`, add `pb-[env(safe-area-inset-bottom)]`, and keep the banner to about 25% of a 667 px-tall screen or less.

- [ ] **CK-02 (P1) Give both choices equal weight.**
  "Apenas essenciais" should be as easy to tap and as visible as "Aceitar cookies". This is good LGPD practice, and the equal sizes in CK-01 also help on small screens.
