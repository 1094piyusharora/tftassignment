const pop = require('puppeteer');
const fun = async () =>
{
const browser = await pop.launch({headless: false , args: ['--start-fullscreen']});
const page = await browser.newPage();
await page.setViewport({width: 1200, height: 900});
await page.goto("https://www.shutterstock.com/");

await page.click('[data-track-label="logIn"]');
await page.waitFor('[data-automation="LoginForm_email_input"]');
await page.type('[data-automation="LoginForm_email_input"]', 'batman1094@yopmail.com');
await page.type('[data-automation="LoginForm_password_input"]' , '10jan1994');
await page.click('[data-automation="LoginForm_continue_button"]');

await page.waitForNavigation({ waitUntil: 'networkidle0' });

if(await page.$('[data-automation="SiteHeader_Logo_link"]') !== null )
console.log("Sucessfull");
else 
console.log("Try Again");

await browser.close();

}
fun();