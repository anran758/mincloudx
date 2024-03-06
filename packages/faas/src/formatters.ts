import { isPlainObject } from 'lodash';
import type { FaaS } from '@mincloudx/types';

/**
 * formatEvent
 *
 * @description`event.data` is the parameter passed by the user when invoking cloud function,
 * thus this handler ensures that ensure user-defined function can safely access.
 */
export function formatEvent<T>(event: FaaS.Event<T>): FaaS.Event<T> {
  const evt = { ...event };
  if (!isPlainObject(evt.data)) {
    evt.data = {} as T;
  }

  return evt;
}

/**
 * Ensure the returned object structure from the user-defined function
 */
export function formatResponse(
  response: any,
): Record<any, any> | { data: any } {
  return isPlainObject(response) ? response : { data: response || 'success' };
}
