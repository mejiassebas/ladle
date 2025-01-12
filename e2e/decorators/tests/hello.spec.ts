import { test, expect } from "@playwright/test";

test("decorators are applied in the correct order", async ({ page }) => {
  await page.goto("http://127.0.0.1:61103/?story=hello--world");
  await expect(page.locator("main")).toHaveText(
    "Decorator 2Decorator 1Decorator 3world",
  );
});
