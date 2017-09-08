const puppeteer = require('puppeteer');
const url = require('url');
const args = require('minimist')(process.argv.slice(3));

// defaults options
const site = process.argv[2] || "https://ohthatsnice.net";
const zoom = args.zoom || 90;
const delay = args.delay || 0;
const width = args.width || 1200;
const height = args.height || 800;

// create name for image from hostname
const name = url.parse(site.replace('www.', '')).hostname.split('.')[0];

// take the screenshot
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({
    width: width,
    height: height
  });

  await page.goto(site);

  await page.waitFor(delay);

  await page.evaluate('document.body.style.zoom="'+ zoom + '%";');

  await page.screenshot({path: 'shots/' + name + '.png'});

  browser.close();
})();
