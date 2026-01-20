import fs from 'fs';
import { test, expect } from '@playwright/test';

test('has title with screenshots', async ({ page }) => {
  const folder = 'screenshots/forms';
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });

  await page.goto('/Automation%20Testing/html/form.html');

  // Screenshot BEFORE assertion
  await page.screenshot({ path: `${folder}/01-form-${Date.now()}.png`, fullpage: true });
  
  // Step 2: Fill input
  await page.getByRole('textbox', { name: 'Search' }).fill('hello');
  await page.screenshot({path: `${folder}/02-form-after-fill-${Date.now()}.png`, fullpage: true});


  // Perform assertion
  await expect(page).toHaveTitle(/Confirm Before Submit/);

  // Screenshot AFTER assertion (optional)
  await page.screenshot({ path: `${folder}/02-form-after-title-${Date.now()}.png`, fulpage: true });
});
