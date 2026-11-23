# Integron — Landing Page

Marketing site for Integron, a pre-SEFAZ NF-e validation platform for Brazilian companies.

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first styling
- [Web3Forms](https://web3forms.com) — contact form backend
- [Railway](https://railway.app) — hosting

## Local development

```sh
npm install
cp .env.example .env   # fill in WEB3FORMS_ACCESS_KEY
npm run dev            # http://localhost:4321
```

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `WEB3FORMS_ACCESS_KEY` | Yes | UUID from your Web3Forms dashboard |
| `PUBLIC_SITE_URL` | Recommended | Canonical URL for og:image (e.g. `https://integronhub.com.br`) |

Set both in **Railway → Variables** before deploying to production.

## Deploy

Railway is configured via `railway.json`. Push to `main` to trigger a build:

```sh
git push origin main
```
