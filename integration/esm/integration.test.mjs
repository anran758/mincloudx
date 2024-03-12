import { createFaas } from '@mincloudx/faas';
import test from 'node:test';
import assert from 'node:assert';

test('@mincloudx/faas should export modules', () => {
  assert(createFaas instanceof Function);
});
