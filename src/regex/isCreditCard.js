/**
 * Checks if a string is a valid credit card number.
 *
 * @param {string} cardNumber The credit card number.
 * @return {boolean} True if the number is a valid credit card number, false otherwise.
 */
export const isCreditCard = (cardNumber) => {
  const sanitized = cardNumber.replace(/[^0-9]/gi, "");
  let sum = 0;
  let alternate = false;

  for (let i = sanitized.length - 1; i >= 0; i--) {
    let n = parseInt(sanitized.charAt(i), 10);

    if (alternate) {
      n *= 2;
      if (n > 9) {
        n = (n % 10) + 1;
      }
    }

    sum += n;
    alternate = !alternate;
  }

  return sum % 10 === 0;
};
