const test = require('node:test');
const assert = require('node:assert');
const { createFaas } = require('@mincloudx/faas');

test('@mincloudx/faas should export modules', () => {
  assert(createFaas instanceof Function);
});
