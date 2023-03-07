import { test, expect } from "@playwright/test";

test("Flow types work with enableFlow: true", async ({ page }) => {
  await page.goto("http://127.0.0.1:61104/?story=hello--world");
  await expect(page.locator("main")).toHaveText("Flow Button");
});
