const pup = require('puppeteer');
const a = async () => {
  const browser = await pup.launch({headless: false , slowMo: 250});
  const page = await browser.newPage();
  await page.goto("https://www.google.com/");
  await page.screenshot({path: 'home.png', fullPage :true });

  await browser.close();
}

a();
