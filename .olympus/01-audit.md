# Audit — before (main @ f05d54b), static build served under /education-hub-connect/

390×844 unless noted. "Layout" = width the page actually lays out at on a phone; when it exceeds
the device width the phone zooms out (the kit's `measure.mjs` misses this because `innerWidth`
grows with it — screens marked * are therefore understated).

| Route | Screens @390 | Layout @390 | Layout @320 | Targets <24 | Inputs <16 | Tab bar | Body |
|---|---|---|---|---|---|---|---|
| / | 13.5 | 390 | 320 | 0 | 0 | no | 16 |
| /about | 2.4* | 405 | 404 | 1 | 0 | no | 16 |
| /documents | 2.8* | 405 | 404 | 1 | 0 | no | 16 |
| /visa | 2.7* | 405 | 404 | 1 | 0 | no | 16 |
| /vienna | 14.7* | 405 | 404 | 1 | 0 | no | 16 |
| /universities/university-of-graz | 1.7* | 1156 | 1156 | 3 | 0 | no | 16 |

Home, per section (screens @390): hero 1.00 · services 2.09 · how-it-works 1.39 ·
universities 5.11 · founder 1.74 · contact 1.50 · footer 0.72.

Desktop 1280 heights: / 7420 · /about 1267 · /documents 1818 · /visa 1784 · /vienna 4691 ·
/universities/university-of-graz 2751 (scrollWidth 1680).
