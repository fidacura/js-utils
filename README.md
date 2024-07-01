# js-utils

A bunch of JavaScript utilities designed to streamline common web development tasks.

## Table of Contents

- User Interface
- DOM Manipulation
- Randomization
- Color Utilities
- Function Optimization and Timing
- Cookies Manipulation
- OS Information
- Regular Expressions
- Time
- Objects Manipulation
- Miscellaneous

## User Interface

- `copyToClipboard`: Copies text to the clipboard.
- `dragElement`: Make an element draggable within the viewport.
- `isInViewport`: Checks if an element is in the viewport.
- `keyboardShortcut`: Register and handle custom keyboard shortcuts.
- `modalPopUp`: Create and manage modal pop-ups with ease.
- `takeScreenshot`: Takes a screenshot of the current webpage and saves it with an incremental filename when the "s" key is pressed.
- `toastNotification`: Display a brief, non-blocking notification on the screen.
- `toggleFullScreen`: Toggles fullscreen mode on double click or pressing "f".

## DOM Manipulation

- `animateElement`: Animate an element with custom properties.
- `cloneElement`: Create a deep clone of a DOM element.
- `createElement`: Creates and appends an element to the DOM.
- `filterElements`: Filter DOM elements based on custom criteria.
- `findParent`: Find the closest parent element matching a given selector.
- `getScrollTop`: Retrieves the distance of the scroll bar from the top of the page.
- `lazyLoadImages`: Implement lazy loading for images.
- `offset`: Retrieves the position of an element relative to the document.
- `removeElement`: Removes an element from the DOM.
- `scrollTo`: Smoothly scrolls the window to a specific position within a given duration.
- `setScrollTop`: Sets the scroll bar position from the top of the page.
- `sortChildElements`: Sort child elements of a container.
- `windowResize`: Handles callbacks for when the mobile keyboard is shown or hidden.

## Randomization

- `randomGradient`: Generate a random CSS gradient.
- `randomInt`: Generates a random integer within a specified range.
- `randomFloat`: Generates a random floating-point number within a range.
- `randomString`: Generate a random string of specified length and character set.
- `shuffleArray`: Shuffle an array in a random order.

## Color Utilities

- `colorPaletteGenerator`: Generate a color palette from a base color.
- `contrastColor`: Find a contrasting color for accessibility.
- `generateRandomColor`: Generates a random color in various formats.
- `hexToRgb`: Converts Hex color format to RGB.
- `rgbToHex`: Converts RGB color format to Hex.

## Function Optimization and Timing

- `debounce`: Debounces a function to limit how often it can run.
- `linearEasing`: Linear easing function for animations.
- `throttle`: Throttles a function to limit how frequently it can fire.
- `requestAnimationFrameFPS`: RequestAnimationFrame with a set FPS.

## Cookies Manipulation

- `getCookie`: Retrieves the value of a specified cookie.
- `delCookie`: Deletes a specified cookie.
- `setCookie`: Sets a cookie with a name, value, and expiry.
- `lsCookies`: List all cookies stored in the browser.
- `cookieConsent`: Manage cookie consent for compliance.
- `getCookieSize`: Calculates the total size of all cookies.

## OS Information

- `checkWebPSupport`: Checks if the browser supports WebP images.
- `checkWebGLSupport`: Checks if the browser supports WebGL.
- `detectBrowserFeatures`: Detects various browser features.
- `getBrowser`: Retrieves the type and version of the browser.
- `getOS`: Retrieves the type of the operating system.
- `mobileCheck`: Check if the user is on a mobile device.

## Regular Expressions

- `isColor`: Determines if a string is a valid color.
- `isCreditCard`: Checks if a string is a valid credit card number.
- `isEmail`: Determines if a string is a valid email address.
- `isURL`: Determines if a string is a valid URL.
- `passwordStrength`: Evaluates password strength.

## Time

- `countdownTimer`: Creates a countdown timer.
- `formatPassTime`: Formats the elapsed time since a start time.
- `formatRemainTime`: Formats the remaining time until an end time.
- `formatTime`: Formats milliseconds into a readable time.
- `isLeapYear`: Checks if a year is a leap year.
- `isSameDay`: Checks if two dates are on the same day.
- `monthDays`: Gets the number of days in a month.
- `relativeTime`: Displays time in a relative format.
- `timeLeft`: Calculates the remaining time between two dates.
- `timezoneConverter`: Converts timezones.
- `weekNumber`: Finds the week number of a date.

## Objects Manipulation

- `deepClone`: Creates a deep clone of an object or array.
- `deepCompare`: Deeply compares two objects for equality.

## Miscellaneous

- `calculateDistance`: Calculates the distance between two points.
- `generateUUID`: Generates a unique identifier (UUID).
- `mapRange`: Maps a number from one range to another.
