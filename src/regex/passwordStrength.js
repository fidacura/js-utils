/**
 * Evaluates the strength of a password.
 *
 * @param {string} password The password to evaluate.
 * @return {string} The strength of the password ('weak', 'medium', 'strong').
 */
export const passwordStrength = (password) => {
  let strength = 0;

  if (password.length > 5) strength += 1;
  if (password.match(/\d+/)) strength += 1;
  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength += 1;
  if (password.match(/[^a-zA-Z0-9]/)) strength += 1;

  return strength <= 1 ? "weak" : strength <= 2 ? "medium" : "strong";
};
