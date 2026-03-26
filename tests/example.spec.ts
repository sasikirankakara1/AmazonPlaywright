import { test, expect } from "../fixtures/fixtures";
import { homeData } from "../testdata/homedata";

test.describe("Amazon", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("1.	Search for a product using full name (“Apple iPhone 14”) and validate results. ", async ({
    page,home
  }) => {
    await home.searchForProduct(homeData.productName)
    await home.AssertProduct(homeData.productName)
    await page.pause()
  });
});
