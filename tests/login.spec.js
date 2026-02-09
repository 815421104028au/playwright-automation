import {test , Expect} from '@playwright/test';
test ('Login page testing',async ({page}) => {
    //Navigate to the login page
 page.goto ('https://www.flipkart.com/');
 // Navigate to the Search bar
 await page.locator ('search bar')






});