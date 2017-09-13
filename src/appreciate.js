// @flow
const puppeteer = require('puppeteer');
const R = require('ramda');
const login = require('./pages/login');
const timeline = require('./pages/timeline');
const { nodeEnv } = require('./env');

type AppreciateOptions = {
  email: string,
  password: string,
  username: string,
  point?: number,
  hashtag?: string,
  message?: string,
}

const appreciate: AppreciateOptions => Promise<void>
= async ({ email, password, username, point = 1, hashtag, message = 'thanks!' }) => {
  if (!email || !password) {
    throw new Error('Both email and password are required.');
  }

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: nodeEnv === 'production',
  });
  const page = await browser.newPage();
  await R.pipeP(
    login.login({ email, password }),
    timeline.submit({ username, point, hashtag, message }),
  )(page);
  if (browser.close) browser.close();
};

module.exports = {
  appreciate,
};
