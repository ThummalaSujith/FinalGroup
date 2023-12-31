import { test, expect } from '@playwright/test';

test('Navbar is present on the page', async ({ page }) => {
  await page.goto('https://final-group.vercel.app/');

  // Use the class, ID, or any unique attribute of the Navbar as the 
  const navbar = await page.$('.navbar'); // Example: If Navbar has a class 'navbar'
  
  expect(navbar).not.toBeNull();
});




