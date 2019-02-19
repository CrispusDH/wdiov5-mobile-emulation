import {Element} from 'webdriverio';

export class Google {
  // Private readonly input: Element;

  async input(): Promise<Element> {
    return $('abc');
  }

  async open(): Promise<void> {
    await browser.url('https://github.com/CrispusDH');
    await browser.pause(10000);
  }
}
