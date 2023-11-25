/**
 * Displays time in a relative format.
 *
 * @param {Date} date The date to be displayed in relative format.
 * @return {String} Relative time string.
 */
export const relativeTime = (date) => {
  const now = new Date();
  const secondsPast = (now.getTime() - date.getTime()) / 1000;

  if (secondsPast < 60) {
    return `${Math.round(secondsPast)} seconds ago`;
  }
  if (secondsPast < 3600) {
    return `${Math.round(secondsPast / 60)} minutes ago`;
  }
  if (secondsPast <= 86400) {
    return `${Math.round(secondsPast / 3600)} hours ago`;
  }
  if (secondsPast > 86400) {
    const day = date.getDate();
    const month = date
      .toDateString()
      .match(/ [a-zA-Z]*/)[0]
      .replace(" ", "");
    const year =
      date.getFullYear() === now.getFullYear() ? "" : ` ${date.getFullYear()}`;
    return `${day} ${month}${year}`;
  }
};
