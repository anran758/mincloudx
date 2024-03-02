const { createFaas } = require('@mincloudx/faas');
const test = require('node:test');
const assert = require('node:assert');

test('@mincloudx/faas should export modules', () => {
  assert(createFaas instanceof Function);
});
