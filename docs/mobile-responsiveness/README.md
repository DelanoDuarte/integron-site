# Mobile Responsiveness — Integron Website

> Status: planned · Last reviewed: 2026-11-21

**Goal:** the landing page at <https://integronhub.com.br> reads well and converts on 320–430 px phones. That means no horizontal scroll, a working mobile menu, stacked layouts, tap targets of at least 44 px, and a cookie banner that never hides the CTAs.

The review used the rendered page content. Raw HTML and CSS were not inspected, so tasks marked **(verify)** need a quick DevTools check before you build them.

**Stack:** Spring + JTE templates + Tailwind. Fixes use Tailwind's mobile-first utilities: unprefixed classes are for mobile, and `sm:` / `md:` / `lg:` add the larger layouts.

**Priorities:**

| Priority | Meaning |
| --- | --- |
| **P0** | Blocks mobile use |
| **P1** | Clearly hurts mobile use |
| **P2** | Polish |

## Task files

| File | Scope | Task IDs |
| --- | --- | --- |
| [01-foundation.md](./01-foundation.md) | Global CSS / Tailwind changes | F-01 – F-09 |
| [02-sections.md](./02-sections.md) | Section-by-section layout fixes | H, HR, D, E, S, P, C, V, FT, PR, CT, FO, CK |
| [03-performance-accessibility.md](./03-performance-accessibility.md) | Mobile performance and a11y | PA-01 – PA-08 |
| [04-related-issues.md](./04-related-issues.md) | Non-layout issues affecting mobile visitors | R-01 – R-03 |

## Target devices and breakpoints

Test every task at these viewports in Chrome DevTools device mode, then confirm on one real iPhone (Safari) and one real Android phone (Chrome), in both light and dark mode.

| Device | Viewport (CSS px) | Why it matters |
| --- | --- | --- |
| Stress width | 320 × 568 | Smallest width still in use; catches overflow early |
| Entry-level Android (e.g. Galaxy A series) | 360 × 800 | Typical Android width |
| iPhone SE | 375 × 667 | Narrow and short; cookie banner and sticky header crowd it most |
| iPhone 14/15 | 390 × 844 | Mainstream iOS |
| iPhone Pro Max | 430 × 932 | Largest phone |
| Phone landscape | 844 × 390 | Short height: sticky header and banner overlap |
| iPad mini portrait | 768 × 1024 | Sits on the `md` boundary |

Keep Tailwind's default breakpoints: `sm` 640 px, `md` 768 px, `lg` 1024 px, `xl` 1280 px. Phones get the unprefixed layout. Two columns start at `sm` or `md`, and full desktop layouts start at `lg`.

## Order of work

Ship in four small PRs so each one can be checked on a phone before the next starts.

1. **Foundations and blockers:** PA-01 baseline, F-01 to F-05, H-01, CK-01 and R-01.
2. **Layouts:** HR, D, P, C, FT and PR tasks.
3. **Remaining sections:** E-01, S-01, V tasks, CT-01, FO-01 and CK-02.
4. **Polish:** the rest of PA, F-06 to F-09, R-02 and R-03, then a second Lighthouse run.

## Definition of done

- [ ] No horizontal scroll at 320, 360, 375, 390, 430 and 768 px, in portrait and landscape.
- [ ] Every interactive element is at least 44 × 44 px and works by keyboard.
- [ ] Every CTA leads to a working contact path on a phone.
- [ ] Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95.
- [ ] Core Web Vitals in the "good" range: LCP < 2.5 s, CLS < 0.1, INP < 200 ms.
- [ ] Checked on real iOS Safari and Android Chrome, in light and dark mode.
- [ ] Each PR includes before/after screenshots at 375 px.
