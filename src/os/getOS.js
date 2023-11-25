/**
 * getOS:
 * Retrieves the type of the operating system.
 *
 * @returns {String} The operating system name.
 */
export const getOS = () => {
  const { userAgent, platform, appVersion } = navigator;

  if (/mac/i.test(platform)) return "MacOS";
  if (/win/i.test(platform)) return "Windows";
  if (/linux/i.test(platform)) return "Linux";
  if (/iphone|ipad|ipod/i.test(userAgent)) return "iOS";
  if (/android/i.test(userAgent)) return "Android";
  if (/win/i.test(appVersion) && /phone/i.test(userAgent))
    return "Windows Phone";

  return "Unknown";
};
