import FormData from 'form-data';

import request from '../index';
import { decodeTokens, encodeTokens } from '../utils';
import { getConfig, updateConfig } from '../../config';
import { API_URL_MAPPING } from '../../config/api';

function saveToken(clientId: string, token: string) {
  const config = getConfig();
  const tokens = decodeTokens(config.tokens);
  tokens[clientId] = token;

  return updateConfig({
    tokens: encodeTokens(tokens),
  });
}

/**
 * 登录
 *
 * @description 获取知晓云的登录授权 token
 */
export async function login({
  clientId,
  clientSecret,
}: {
  clientId: string;
  clientSecret: string;
}) {
  // 获取 code 信息
  const authResponse = await request<string | { code: string }>({
    url: API_URL_MAPPING.AUTHORIZE,
    method: 'post',
    data: {
      client_id: clientId,
      client_secret: clientSecret,
    },
    withCredentials: true,
  });

  if (typeof authResponse.data === 'string') {
    console.error('登录授权失败:', authResponse);
    return;
  }

  const code = authResponse.data.code;
  const formData = new FormData();
  formData.append('client_id', clientId);
  formData.append('client_secret', clientSecret);
  formData.append('grant_type', 'authorization_code');
  formData.append('code', code);

  const response = await request.post<{
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    refresh_token: string;
  }>(API_URL_MAPPING.ACCESS_TOKEN, formData);

  // 缓存 token
  await saveToken(clientId, response.data.access_token);

  return response;
}
