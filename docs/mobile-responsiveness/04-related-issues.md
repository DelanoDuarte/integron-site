# 04 — Related Issues Found During Review

[← Back to overview](./README.md)

These aren't layout bugs, but each one hurts mobile visitors, most of whom arrive from WhatsApp or LinkedIn links.

- [ ] **R-01 (P0) Make the `#contato` target work.**
  Every CTA links to `#contato`, but no contact section appeared in the rendered page **(verify)**. If it's missing, the main CTA does nothing on any device. Add the section, with a short form (inputs at 16 px or more so iOS doesn't zoom) and a WhatsApp or mailto fallback.

- [ ] **R-02 (P1) Pick one canonical domain.**
  `og:image` points to `integronhub.com`, while the logos load from `integronhub.com.br`. Choose one domain, add `<link rel="canonical">`, and use absolute URLs on it for `og:image` so share previews render.

- [ ] **R-03 (P2) Align the mockup URL.**
  The dashboard mockup shows `app.integron.com.br`, which doesn't match the brand domain. Change it to the real app domain or a neutral one.
