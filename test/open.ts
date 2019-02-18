import {Google} from '../src/pages/google';

describe('open test', () => {
  it('should open google', async () => {
    const page = new Google();
    await page.open();
  });
});
