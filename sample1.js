const p = require('puppeteer');
const  fun = async () =>{
    const browser = await p.launch();
    const page = await browser.newPage();
    await page.goto('https://news.ycombinator.com', { waituntil: 'networkidle2' });
    await page.pdf({path: 'sample.pdf', format: 'A4'});

    await browser.close();
}
fun();