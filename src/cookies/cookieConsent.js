/**
 * cookieConsent:
 * Manages cookie consent.
 *
 * @param {Function} onConsent A callback function to execute when consent is given.
 */
export const cookieConsent = (onConsent) => {
  // Check if consent cookie is already set
  if (
    !document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookie_consent="))
  ) {
    // Show consent UI and ask for consent
    // This is a placeholder for the actual consent UI logic
    const consent = confirm("Do we have your consent to use cookies?");
    if (consent) {
      document.cookie = "cookie_consent=yes; path=/";
      onConsent();
    }
  } else {
    onConsent();
  }
};
