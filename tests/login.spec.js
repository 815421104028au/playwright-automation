import { test, expect } from '@playwright/test';

test('Bikewale site test', async ({ page }) => {
  await page.goto('https://www.bikewale.com/');
  console.log("1 launched");
    const title_1 = await page.title();
  console.log('Page title:', title_1);
  const searchBox = page.getByPlaceholder('Search your bike here, e.g. Royal Enfield Hunter 350');
  console.log("2 locator found or loaded");
  //await expect(searchBox).toBeVisible();
await searchBox.fill('Royol enfield');
const searchbtn=page.locator('button:has-text("search")');
await searchbtn.click();
await expect(page).toHaveURL('https://www.bikewale.com/best-bikes-in-india/');
const modelTitle=page.locator('a:has-text("Hunter 350")');
await expect(modelTitle).toHaveText("Royal Enfield Hunter 350");
await modelTitle.click();

  
});
