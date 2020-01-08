const pup = require('puppeteer');
const fun = async () =>
{
    const browser = await pup.launch({ headless: false});
    const page = await browser.newPage();

    await page.goto("https://www.google.com/");
    await page.type('[type="text"]' , 'shutterstock');
    await page.keyboard.press('Enter');

    await page.waitFor(5000);
    await page.click('[class="iUh30"]');
    await page.waitFor(5000);

    await page.click('[data-track-label="logIn"]');
    await page.waitFor('[data-automation="LoginForm_email_input"]');
    await page.type('[data-automation="LoginForm_email_input"]', 'batman1094@yopmail.com');
    await page.type('[data-automation="LoginForm_password_input"]' , '10jan1994');
    await page.click('[data-automation="LoginForm_continue_button"]');

   // await page.waitForSelector('[data-automation="SiteHeader_Logo_link"]');
await page.waitForNavigation({ waitUntil: 'networkidle0' }); 


    await browser.close();
}
fun();
