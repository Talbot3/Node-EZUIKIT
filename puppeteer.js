const puppeteer = require('puppeteer');
const { record } = require('puppeteer-recorder');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({headless: false , args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto('http://localhost:8000/ui_voice.html', {timeout: 60000}).catch(function (error) {
        throw new Error('TimeoutBrows');
    });;
    await record({
        browser,
        page,
        output: path.join(__dirname, `./resources/record.webm`),
        fps: 25,
        frames: 25 * 600,
        prepare: function () {}, // <-- add this line
        render: function () {} // <-- add this line
    });


  
    console.log('Dimensions:', dimensions);

    // await browser.close();
  })();