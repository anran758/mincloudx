export const ERROR_MESSAGE = {
  '401': '登录凭证已过期，请重新登录。',
  '403': '权限不足。',
  '404': '请求的资源不存在。',
};

export const API_URL_MAPPING = {
  AUTHORIZE: '/api/oauth2/hydrogen/openapi/authorize/',
  ACCESS_TOKEN: '/api/oauth2/access_token/',
  TABLE: '/oserve/v1.8/table/',
  CLOUD_FUNCTION: '/oserve/v1.3/cloud-function/',
  CLOUD_FUNCTION_DEBUG: '/oserve/v1.3/cloud-function/{name}/debug/',
};
