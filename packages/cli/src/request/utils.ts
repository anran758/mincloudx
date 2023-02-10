import type { AxiosError } from 'axios';
import { ERROR_MESSAGE } from '../config/api';

export function transformErrorMessage(error: AxiosError) {
  const status = error.response?.status;

  // 设置错误信息
  if (status) {
    const message = ERROR_MESSAGE[status];
    if (message) {
      error.message = message;
    }
  }

  return error;
}
