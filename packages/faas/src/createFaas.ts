import type { FaaS } from '@mincloudx/types';

import { upgradeFaaSSdk } from './version';
import { formatEvent, formatResponse } from './formatters';

export interface CreateFaasOptions {
  version?: string;
  updateVersion?: boolean;
}

export function createFaas<T extends object>(
  fn: FaaS.UserDefinedFunction<T>,
  { version, updateVersion = true }: CreateFaasOptions = {},
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
  return async function userDefinedFunctionProxy(
    evt: FaaS.Event<T>,
    callback?: FaaS.MainCallback,
  ) {
    const event = formatEvent<T>(evt);
    const response = await fn(event, callback);

    return formatResponse(response);
  };
}
