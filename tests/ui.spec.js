const { test, expect } = require('@playwright/test'); 

 

test('button click updates message', async ({ page }) => { 

  // eslint-disable-next-line no-undef
  await page.goto('file://' + __dirname + '/../index.html'); 

  await page.click('#clickMe'); 

  await expect(page.locator('#message')).toHaveText('Button clicked!');

});