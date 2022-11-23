import { test } from '@playwright/test';
import { getRandomNumber, getRandomString } from '../../utils/data-helpers';


test.describe.only('Tips and Tricks Section', () => {
  test.only('TestInfo Object', async({ page }, testInfo) => {
    await page.goto('https://example.com/');
    console.log(testInfo);
    console.log(testInfo.title); 
    console.log(testInfo.expectedStatus); 

    let newNumber = await getRandomNumber();
    let newString = await getRandomString();
    console.log(newNumber);
    console.log(newString);
  });


  test('Test Skip Browser', async({ page, browserName }) => {
    test.skip(browserName === 'chromium', 'Feature not supported in Chromium');
    await page.goto('https://example.com/');
  });


  test('Test Fixme Annotation', async({ page, browserName }) => {
    test.fixme(browserName === 'chromium', 'Test is not stable, needs revision');
    await page.goto('https://example.com/');
  });


  const people = ['My', 'Bean', 'Bemi', 'Na'];
  for (const name of people) {
    test(`Running test for ${name}`, async({ page }) => {
      await page.goto('https://example.com/');
      await page.type('#searchTerm', `${name}`);
      await page.waitForTimeout(3000);
    });
  } 


  test('Mouse Movement Simulation', async({ page }) => {
    await page.goto('https://example.com/');
    await page.mouse.move(0, 0);
    await page.mouse.down();
    await page.mouse.move(0, 100);
    await page.mouse.up();
  });


  test('Multiple Browser Tabs inside 1 Browser', async({ browser }) => { 
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const page3 = await context.newPage();

    await page1.goto('https://example.com/');
    await page2.goto('https://example.com/');
    await page3.goto('https://example.com/');

    await page1.waitForTimeout(3000);
  });
});