import { API_URL_MAPPING } from '../../config/api';
import request from '../index';

/**
 * 更新云函数代码
 */
export async function updateCloudFunction({
  name,
  content,
  remark,
}: {
  name: string;
  content: string;
  remark?: string;
}) {
  return request({
    url: `${API_URL_MAPPING.CLOUD_FUNCTION}${name}`,
    method: 'PATCH',
    data: {
      name,
      function_code: content,
      remark,
    },
  });
}

/**
 * 更新云函数代码
 */
export async function createCloudFunction({
  name,
  content,
  remark,
}: {
  name: string;
  content: string;
  remark?: string;
}) {
  return request({
    url: `${API_URL_MAPPING.CLOUD_FUNCTION}`,
    method: 'POST',
    data: {
      name,
      function_code: content,
      remark,
    },
  });
}
