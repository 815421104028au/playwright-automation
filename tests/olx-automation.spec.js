import { test, expect } from '@playwright /test';
test('olx search Car', async ({page}) => {
    //const Page = await browser.newpage();
    await.page.goto('https://www.olx.in/');
    const searchBox = page.locator('testarea[name = "find car]');
    await expect(searchBox).toBeVisible();
    
})