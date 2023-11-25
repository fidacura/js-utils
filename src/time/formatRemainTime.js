/**
 * Formats the remaining time until a given end time.
 *
 * @param {Date} endTime The end time.
 * @return {String} A string representing the remaining time.
 */
export const formatRemainTime = (endTime) => {
  const startDate = new Date();
  const endDate = new Date(endTime);
  const t = endDate.getTime() - startDate.getTime();

  if (t < 0) {
    return "已结束";
  }

  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((t / (1000 * 60)) % 60);
  const seconds = Math.floor((t / 1000) % 60);

  return `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
};
