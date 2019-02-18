import {Element} from 'webdriverio';

export class Google {
  // Private readonly input: Element<void>;

  async input(): Promise<Element<void>> {
    return $('abc');
  }

  async open(): Promise<void> {
    await browser.url('https://github.com/CrispusDH');
    await browser.pause(10000);
  }
}
