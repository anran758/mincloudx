import { API_URL_MAPPING } from '../../config/api';
import request from '../index';

/**
 * 获取数据表列表
 * @param {*} engine
 */
export async function getSchemaList() {
  return request.get(`${API_URL_MAPPING.TABLE}?limit=1000`);
}
