import { test, expect, chromium } from '@playwright/test';

test('Amazon search for Redmi phone', async () => {
  // 1️⃣ Launch Chromium in headless mode
    const browser = await chromium.launch({ headless: true });
      const context = await browser.newContext({
          recordVideo: { dir: './my-videos/' }
            });
              const page = await context.newPage();

                // 2️⃣ Go to Amazon India
                  await page.goto('https://www.amazon.in/');
                    console.log('Amazon.in opened');
                      const title_1 = await page.title();
                        console.log('Page title:', title_1);

                          const Continuebtn = page.locator('button:has-text("Continue shopping")');
                            if (await Continuebtn.isVisible({timeout: 5000})) {
                                await Continuebtn.click();
                                    console.log('Clicked on Continue shopping button');
                                      }

                                        // 3️⃣ Wait for search box
                                          const searchBox = page.locator('input#twotabsearchtextbox');
                                            await expect(searchBox).toBeVisible({ timeout: 60000 });

                                              // 4️⃣ Type query and search
                                                await searchBox.fill('Redmi phone');
                                                  await page.click('input#nav-search-submit-button');
                                                    console.log('Search executed');

                                                      // 5️⃣ Wait for results
                                                        //const Addtocartbtn = page.locator('button:has -text("Add to Cart")');
                                                             //if (await Addtocartbtn.isVisible({timeout: 5000})) {
                                                                 //await Addtocartbtn.click();
                                                                     console.log('Clicked on Add to  cart shopping button');
                                                                       
                                                                         const images = await page.$$('div.product-gallery img');
for (const image of images) { await image.click(); // Optional: wait a moment to see effect await page.waitForTimeout(500);
  }

                                                                       
                                                                                 console .log('search is working');
                                                                                 // Click the "Sort by" dropdown
await page.click('#sortDropdown');

// Click the option by text
await page.click('text=Price: Low to High');



                                                                                   // 6️⃣ Print first product
                                                                                     const title = await page.title();
                                                                                       console.log('First product:', title);

                                                                                         // 7️⃣ Take screenshot
                                                                                           await page.screenshot({ path: './my-screenshots/search-results.png', fullPage: true });

                                                                                             // 8️⃣ Close context to save video
                                                                                               await context.close();
                                                                                                 await browser.close();
                                                                                                 });
                                                                                                 