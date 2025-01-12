import { test } from "@playwright/test";
import { injectAxe, checkA11y, configureAxe } from "axe-playwright";

test("empty label doesn't violate axe run", async ({ page }) => {
  await page.goto("http://127.0.0.1:61100/?story=hello--world");
  await page.waitForSelector("[data-storyloaded]");
  await injectAxe(page);
  await configureAxe(page);
  await checkA11y(page, undefined, {
    detailedReport: true,
    axeOptions: {},
  });
});
