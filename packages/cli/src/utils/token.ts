/**
 * tokens 解码为对象
 */
export function decodeTokens(str = '') {
  if (!str?.length) return {};
  return str
    .trim()
    .split(',')
    .reduce((acc, pair) => {
      const [key, value] = pair.split(':');
      acc[key] = value;
      return acc;
    }, {});
}

/**
 * 将 tokens 对象编码为字符串
 */
export function encodeTokens(obj = {}) {
  return Object.keys(obj)
    .map((key) => `${key}:${obj[key]}`)
    .join(',');
}
