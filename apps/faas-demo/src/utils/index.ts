export function getCurrentDate() {
  const now = new Date();

  // 分别获取日期和时间字符串
  const dateString = now
    .toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\//g, '-');

  const timeString = now.toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // 使用24小时制
  });

  return `${dateString} ${timeString}`;
}
