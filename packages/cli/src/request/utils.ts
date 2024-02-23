import type { AxiosError } from 'axios';
import { ERROR_MESSAGE } from '../config/api';

export function transformErrorMessage(error: AxiosError) {
  const status = error.response?.status;

  // 设置错误信息
  if (status) {
    const message = error.response?.data || ERROR_MESSAGE[status];
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
