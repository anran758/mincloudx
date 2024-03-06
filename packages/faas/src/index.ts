import { isPlainObject } from 'lodash';
import { FAAS_LATEST_SDK_VERSION } from './config';
import type { FaaS } from '../types/faas';

interface CreateFaasOptions {
  version?: string;
  updateVersion?: boolean;
}

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

export async function createFaas<T>(
  fn: FaaS.MainFunction<T>,
  { version, updateVersion }: CreateFaasOptions = {},
) {
  // specify the version
  if (version) {
    upgradeFaaSSdk(version);
  } else if (updateVersion) {
    // use least version
    upgradeFaaSSdk();
  }

  /**
   * format user-defined function data structure
   */
  return async function formatResponseWrap(
    ...args: Parameters<FaaS.MainFunction>
  ) {
    // `event.data` is the parameter passed by the user when invoking cloud function,
    // thus this handler ensures that ensure user-defined function can safely access `event.data`.
    if (!args[0]) args[0] = {};
    if (!args[0].data) args[0].data = {};

    const response = await fn(...args);

    // Ensure the returned object structure from the user-defined function
    return isPlainObject(response) ? response : { data: response || 'success' };
  };
}
