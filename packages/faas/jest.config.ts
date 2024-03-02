/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  // ensure `npm cit` uses clean cache
  cacheDirectory: './node_modules/.cache/jest',
  clearMocks: true,
  testEnvironment: 'node',
  transform: {},
};

export default config;
