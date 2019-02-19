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
      //
      // Option #1
      // mobileEmulation: {
      //   deviceName: 'iPhone 7'
      // }
      //
      // Option #2
      mobileEmulation: {
        deviceMetrics: {
          width: 380,
          height: 800,
          pixelRatio: 3.0
        },
        // list of user agents https://deviceatlas.com/blog/list-of-user-agent-strings
        userAgent: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 6P Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36"

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
