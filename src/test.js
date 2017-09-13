// @flow
const puppeteer = require('puppeteer');
const { nodeEnv } = require('./env');

const test: () => Promise<void>
= async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: nodeEnv === 'production',
  });
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', { waitUntil: 'networkidle' });
  if (browser.close) browser.close();
};

module.exports = {
  test,
};
