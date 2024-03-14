import type { AxiosError } from 'axios';
import { isPlainObject } from 'lodash';

import { ERROR_MESSAGE } from '../config/api';

export function transformErrorMessage(
  error: AxiosError<{ status: string; error_msg: string }>,
) {
  const { status, data } = error.response || {};

  // 设置错误信息
  if (status) {
    let message = ERROR_MESSAGE[status];

    if (typeof data === 'string') {
      message = data;
    } else if (isPlainObject(data) && data?.error_msg) {
      message = data.error_msg;
    }

    if (message) {
      error.message = message;
    }
  }

  return error;
}

export function handleUnauthorizedError(error: AxiosError) {
  const status = error.response?.status;

  // 设置错误信息
  if (status === 401) {
    console.error('权限不足，请重新登录.');
  }

  return error;
}
