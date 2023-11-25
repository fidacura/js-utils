/**
 * Determines whether a string is a valid hexadecimal, RGB, or RGBA color.
 *
 * @param {String} str The string to test.
 * @return {Boolean} True if the string is a valid color, false otherwise.
 */
export const isColor = (str) => {
  return /^(#([0-9a-fA-F]{3}){1,2}|rgb\((\s*(2[0-4]\d|25[0-5]|[01]?\d\d?)\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d\d?)\s*\)|rgba\((\s*(2[0-4]\d|25[0-5]|[01]?\d\d?)\s*,){3}\s*(1|0|0?\.\d+)\s*\))$/i.test(
    str
  );
};
