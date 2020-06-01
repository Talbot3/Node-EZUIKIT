const puppeteer = require('puppeteer');
const { record } = require('puppeteer-recorder');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({headless: false , args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto('http://localhost:8000/', {timeout: 60000}).catch(function (error) {
        throw new Error('TimeoutBrows');
    });;
    await record({
        browser,
        page,
        output: path.join(__dirname, `./resources/record.webm`),
        fps: 1,
        frames: 1 * 60,
        prepare: function () {}, // <-- add this line
        render: function () {} // <-- add this line
    });

    await browser.close();
  })();