import { test, expect } from "@playwright/test";

test("is a basic test with the page", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.waitForTimeout(3000);
  await page.screenshot({ path: "playwright_img.png" });

  const name = await page.innerText(".navbar__title");
  expect(name).toBe("Playwright");
});
