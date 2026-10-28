# Build plan — Education4Students mobile pass

Budgets: home ≤ 10 screens @390×844, other routes ≤ 8, 0 targets < 24 px, inputs ≥ 16 px,
no horizontal overflow from 320 px, tab bar present, reduced-motion h1 opacity ≥ 0.95,
desktop 1280 unchanged.

Shell (React port): `src/mobile.css` (imported after `index.css`), `src/components/MobileTabBar.tsx`
in the root layout (mobile.js logic as effects), `viewport-fit=cover`. Tokens mapped as `--m-*`
onto the site's HSL tokens (the site already owns `--accent/--surface/--ink/--muted`, so the kit's
names are not redefined). Tab bar labels reuse `t.nav.*` (EN/AZ/TR/RU) — no new copy.
Cells: Home · How it works · Universities · About · **Contact** (primary, accent).

| Section / route | Over by | Treatment (order: merge → rail → fold → show-all → density → content) |
|---|---|---|
| Universities (5.11) | ~3.6 | **rail** — city panel cards become a snap rail |
| Services (2.09) | ~0.8 | **rail** — 3 secondary service cards; featured slideshow (signature) kept |
| Founder (1.74) | ~0.8 | **density** — decorative 3:4 logo plate `m-hide-phone`; double padding removed |
| How it works (1.39) | ~0.4 | **density** — `min-h-svh` and inner py-8 dropped on phones |
| All sections | — | **density** — `--section-y` 48 px on phones |
| /vienna (14.7) | ~7 | **rail** — each gallery group becomes a rail |
| /universities/:slug | overflow | grid track `minmax(0,1fr)` on phones (thumbnail strip forced 1156 px) |
| subpages | overflow | footer wordmark + h1 scaled to column; email wraps |

No content cut. Floating Instagram button hidden on phones (it covered copy); the same link
added to the footer contact list on phones.
