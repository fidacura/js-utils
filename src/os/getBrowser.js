/**
 * getBrowser
 * Retrieves the type and version of the browser.
 *
 * @returns {String} The browser name and version, or 'Unknown' if not identifiable.
 */
export const getBrowser = () => {
  const ua = navigator.userAgent.toLowerCase();
  const match = ua.match(
    /(edge|msie|firefox|safari|chrome|opera|rv:([\d.]+)\) like gecko)/
  );

  if (match) {
    const browser = match[1];
    const versionMatch = ua.match(new RegExp(`${browser}/([\\d.]+)`));
    const version = versionMatch ? versionMatch[1] : "unknown";

    switch (browser) {
      case "msie":
        return `IE: ${version}`;
      case "edge":
        return `EDGE: ${version}`;
      case "firefox":
        return `Firefox: ${version}`;
      case "safari":
        return `Safari: ${version}`;
      case "chrome":
        return `Chrome: ${version}`;
      case "opera":
        return `Opera: ${version}`;
      case "rv:([d.]+)) like gecko":
        return `IE: ${version}`;
      default:
        return "Unknown";
    }
  }

  return "Unknown";
};
