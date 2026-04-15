# Sociallgreen Website

Modern single-page landing page built with Vite, React, and TypeScript for static hosting on GitHub Pages.

Use Node 22 LTS for local development. The current Vite release also works with recent Node 20, but it expects at least `20.19.0`.

## Commands

```bash
npm install
npm run dev
npm run build
npm run deploy
```

## GitHub Pages

The Vite config uses a relative base path, so the built files work on GitHub Pages project sites without editing the asset paths.

`npm run deploy` publishes the `dist` folder using the `gh-pages` package.

If this folder lives inside a larger repository, the root workflow at `.github/workflows/deploy-website.yml` builds and publishes the `website` subfolder through GitHub Pages.