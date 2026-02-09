const { chromium } = require('playwright');

(async () => {
  // Headless mode = works in Codespaces Web
  const browser = await chromium.launch({
    headless: true  // << important!
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.google.com');

  // Take a screenshot to verify
  await page.screenshot({ path: 'google.png' });

  await browser.close();

  console.log("Test ran successfully and screenshot saved as google.png");
})();
