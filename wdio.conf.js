exports.config = {
  runner: 'local',
  specs: [
    './dist/test/*.js'
  ],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [
        '--enable-automation',
        '--disable-gpu',
        '--disable-setuid-sandbox',
        '--window-size=380,800'
      ],
      mobileEmulation: {
        deviceName: 'iPhone 7'
      }
    }
  }],
  logLevel: 'info',
  waitforTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['selenium-standalone'],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  }
};
