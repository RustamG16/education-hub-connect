<p align="center">
  <img src="src/assets/logo.png" alt="Education4Students" height="72">
</p>

<h1 align="center">Education4Students</h1>

<p align="center">Free guidance for students from Azerbaijan and the region who want to study in Austria: university choice, applications, residence permits and arrival.</p>

<p align="center">
  <a href="https://rustamg16.github.io/education-hub-connect/"><img alt="Live site" src="https://img.shields.io/badge/live-rustamg16.github.io%2Feducation--hub--connect-18b1bf?style=flat-square"></a>
  <img alt="Status" src="https://img.shields.io/badge/status-live-555?style=flat-square">
  <img alt="Stack" src="https://img.shields.io/badge/stack-React%20%C2%B7%20Tailwind-555?style=flat-square">
</p>

---

## Screens

<table>
  <tr>
    <td width="74%"><img src="docs/screenshots/desktop.webp" alt="Education4Students: desktop, first screen"></td>
    <td width="26%"><img src="docs/screenshots/mobile.webp" alt="Education4Students: phone, first screen"></td>
  </tr>
</table>

<table>
  <tr>
    <td><img src="docs/screenshots/section-1.webp" alt="How it works: four steps"></td>
    <td><img src="docs/screenshots/section-2.webp" alt="Universities in Vienna"></td>
  </tr>
</table>

## Brand

**Palette**

<img src="docs/brand/palette.svg" alt="Education4Students colour palette">

**Typography**

<img src="docs/brand/type.svg" alt="Education4Students typefaces">

| Role | Typeface | Use |
|---|---|---|
| All text | Plus Jakarta Sans | Headlines, body and interface |

**Marks.** Graduate-cap logo (`src/assets/logo.png`) with an animated Lottie version (`src/assets/loading.json`) used on phones and on hover.

**Voice.** Warm, practical and multilingual (EN, AZ, TR, RU): every step explained plainly.

Design tokens are the HSL custom properties in [`src/index.css`](src/index.css) and [`tailwind.config.ts`](tailwind.config.ts).

## Stack

| Layer | Choice |
|---|---|
| App | React 18, TypeScript, Vite 5, react-router 6 |
| UI | Tailwind 3, shadcn/ui (Radix) |
| Motion | GSAP + ScrollTrigger, Lenis smooth scroll, Lottie |

## Run locally

```bash
npm ci
npm run dev
```

`npm run build` builds to `dist/` and writes the SPA fallback for GitHub Pages.

## Deploy

Every push to `main` builds and publishes to GitHub Pages (`.github/workflows/deploy-pages.yml`).

## Structure

```
src/pages/          routes (home, about, universities)
src/components/     sections, Navbar, shadcn/ui
src/lib/scroll.ts   Lenis + ScrollTrigger setup
src/contexts/       language (EN/AZ/TR/RU)
scripts/            university data tooling
```

## Status

Live. The one real commission among these projects.

---

<sub>Designed and built by Convenium Studio, Klagenfurt. Brand assets regenerate with `templates/readme/make_readme_assets.py` from `docs/brand/brand.json`.</sub>
