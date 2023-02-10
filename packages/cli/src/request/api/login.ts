import FormData from 'form-data';

import request from '../index';
import { updateConfig } from '../../config';

function saveToken(token: string) {
  return updateConfig({
    tokens: token,
  });
}

/**
 * 登录
 *
 * @description 获取知晓云的登录授权 token
 *
 * TODO: API url 应集中放置到映射中
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
    url: '/api/oauth2/hydrogen/openapi/authorize/',
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
  }>('/api/oauth2/access_token/', formData);

  const { access_token } = response.data;
  await saveToken(access_token);
  console.log('登录成功')
}
