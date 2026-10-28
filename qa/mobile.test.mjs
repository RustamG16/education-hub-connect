// Mobile budgets (Convenium.Design mobile-app-shell). Fails with exit code 1 when a route regresses.
//   npm run build && npx vite preview --port 4173 &
//   npx -y -p playwright@1.48.2 node qa/mobile.test.mjs http://localhost:4173/education-hub-connect
// Playwright is not a dependency of the site; `npx -p` fetches it for the run
// (first time: `npx -y playwright@1.48.2 install chromium`).
import { chromium } from "playwright";

const base = (process.argv[2] || "http://localhost:4173/education-hub-connect").replace(/\/$/, "");
const routes = [
  ["/", 10],
  ["/about", 8],
  ["/documents", 8],
  ["/visa", 8],
  ["/vienna", 8],
  ["/universities/university-of-graz", 8],
];
const sizes = [[320, 568], [360, 780], [375, 667], [390, 844], [430, 932]];

const browser = await chromium.launch();
const failures = [];
for (const [route, budget] of routes) {
  for (const [w, h] of sizes) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, isMobile: true, hasTouch: true });
    const page = await ctx.newPage();
    await page.goto(base + route, { waitUntil: "networkidle" });
    for (let i = 0; i < 30; i++) {
      await page.evaluate(() => window.scrollBy(0, innerHeight));
      await page.waitForTimeout(80);
    }
    const r = await page.evaluate(() => {
      const d = document.documentElement;
      const bar = document.querySelector("[data-tabbar]");
      return {
        // A layout wider than the device makes a phone zoom out, so innerWidth grows too; compare both.
        layoutW: Math.max(innerWidth, d.scrollWidth),
        screens: d.scrollHeight / innerHeight,
        under24: [...document.querySelectorAll("a,button,input,select,[role=button]")].filter((e) => {
          const b = e.getBoundingClientRect();
          return b.width > 0 && (b.width < 24 || b.height < 24);
        }).length,
        smallInputs: [...document.querySelectorAll("input,select,textarea")].filter(
          (e) => parseFloat(getComputedStyle(e).fontSize) < 16,
        ).length,
        tabbar: Boolean(bar && getComputedStyle(bar).display !== "none"),
      };
    });
    const tag = `${route} @${w}`;
    if (r.layoutW > w) failures.push(`${tag}: layout ${r.layoutW}px wider than ${w}px`);
    if (r.under24) failures.push(`${tag}: ${r.under24} targets under 24px`);
    if (r.smallInputs) failures.push(`${tag}: ${r.smallInputs} inputs under 16px`);
    if (!r.tabbar) failures.push(`${tag}: tab bar missing`);
    if (w === 390 && r.screens > budget) failures.push(`${tag}: ${r.screens.toFixed(1)} screens > ${budget}`);
    await ctx.close();
  }
}

// Desktop keeps its layout: no tab bar at 1280.
const desk = await (await browser.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
await desk.goto(base + "/", { waitUntil: "networkidle" });
const bar = await desk.waitForSelector("[data-tabbar]", { state: "attached", timeout: 15000 }).catch(() => null);
if (!bar) failures.push("/ @1280: tab bar not rendered");
else if (await bar.evaluate((el) => getComputedStyle(el).display !== "none"))
  failures.push("/ @1280: tab bar visible on desktop");

await browser.close();
if (failures.length) {
  console.error("Mobile budget failures:\n  " + failures.join("\n  "));
  process.exit(1);
}
console.log(`Mobile budgets OK: ${routes.length} routes × ${sizes.length} widths.`);
