/**
 * Formats the elapsed time since a given start time.
 *
 * @param {Date} startTime The start time.
 * @return {String} A string representing the elapsed time.
 */
export const formatPassTime = (startTime) => {
  const currentTime = Date.now();
  const time = currentTime - new Date(startTime).getTime();
  const seconds = Math.floor(time / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years) return `${years}年前`;
  if (months) return `${months}个月前`;
  if (days) return `${days}天前`;
  if (hours) return `${hours}小时前`;
  if (minutes) return `${minutes}分钟前`;
  return "刚刚";
};
