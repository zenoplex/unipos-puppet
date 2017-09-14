// @flow
import type { Page } from 'puppeteer';

type SubmitOptions = {
  username: string,
  point: number,
  hashtag?: string,
  message: string,
}

const submit: SubmitOptions => Page => Promise<Page>
= ({ username, point, hashtag, message }) => async (page) => {
  const hash = hashtag ? `#${hashtag}` : '';
  await page.waitForSelector('#post-form-input');
  await page.focus('#post-form-input');
  // needs deplay so textarea dropdown won't repeatedly open
  await page.type(`@${username} +${point} ${message} ${hash}`, { delay: 50 });
  await page.press('Escape');
  await page.click('.postBtn');
  await page.waitForSelector('.postBtn[disabled]');
  await page.waitFor(3000);
  return page;
};

module.exports = {
  submit,
};
