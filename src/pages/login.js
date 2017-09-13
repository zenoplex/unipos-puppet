// @flow
import type { Page } from 'puppeteer';

type LoginOptions = {
  email: string,
  password: string,
}

const login: LoginOptions => Page => Promise<Page>
= ({ email, password }) => async (page) => {
  await page.goto('https://unipos.me/login', { waitUntil: 'networkidle' });
  await page.focus('input[type="email"]');
  await page.type(email);
  await page.focus('input[type="password"]');
  await page.type(password);
  await page.click('button.login_btn');
  await page.waitForFunction('window.location.href === "https://unipos.me/all"');
  return page;
};

module.exports = {
  login,
};
