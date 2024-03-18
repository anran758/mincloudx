global.BaaS = require('@mincloudx/baas');
global.__FAAS_EVENT = {
  ...global.__FAAS_EVENT,
  miniappId: process.env.TEST_MINI_APP_ID,
  token: process.env.TEST_MINI_APP_TOKEN,
};
