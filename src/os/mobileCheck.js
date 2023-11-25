/**
 * mobileCheck:
 * Checks if the user is on a mobile device.
 *
 * @return {Boolean} True if the user is on a mobile device, false otherwise.
 */
export const mobileCheck = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};
