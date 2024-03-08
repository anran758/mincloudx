import { FAAS_LATEST_SDK_VERSION } from './config';

/**
 * Upgrade cloud function SDK
 * @desc Currently, if not set version, the default SDK version for cloud functions is 2.x, but some features are only available with higher versions of the SDK, thus it needs to be upgraded to a higher version.
 * However, since 2.x and 3.x are not fully compatible, old cloud functions need to be tested after upgrading, so the upgrade should be done gradually.
 * @param {string} version The version number, e.g., v3.10
 */
export function upgradeFaaSSdk(version = FAAS_LATEST_SDK_VERSION) {
  console.log('[upgradeFaaSSdk] current faas version: ', version);
  BaaS.useVersion(version);
}
