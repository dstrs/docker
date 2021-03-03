const { chromium } = require("playwright");

async function main() {
  /** @type {import('playwright').Browser} */
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1400, height: 2000 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  await page.goto(process.env.URL);
  await page.waitForSelector("text=Lorem ipsum");
  await page.waitForTimeout(1500);

  for (const viewportWidth of [1600, 1400, 1024, 768, 320]) {
    console.log("viewportWidth:", viewportWidth);
    await page.setViewportSize({ width: viewportWidth, height: 2000 });
    // await page.waitForTimeout(100);
    // ~12

    for (const x of Array(12).keys()) {
      let scrollTop = x * 2000;
      console.log("scrollTop:", scrollTop);
      console.log("x:", x);

      await page.evaluate((top) => window.scrollTo(0, top), [scrollTop]);
      await page.evaluate(
        (__x) => {
          let opacity = Number(__x) === 0 ? 1 : 0;

          document.head.insertAdjacentHTML(
            "beforeend",
            `<style>#scrollUp,#header-sticky{opacity: ${opacity} !important;animation: none !important}</style>`
          );
        },
        [x]
      );

      await page.waitForTimeout(200);
      await page.screenshot({
        path: `${viewportWidth}/${x}__${`.png`}`,
      });
      await page.waitForTimeout(100);

      let clientHeight =
        (await page.evaluate(() => document.body.clientHeight)) - 1999;
      if (scrollTop > clientHeight) {
        console.log("break");
        break;
      }
    }
  }
  await context.close();
  browser.close();
}

main();
