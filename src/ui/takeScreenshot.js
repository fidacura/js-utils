/**
 * Takes a screenshot of the current webpage and saves it with an incremental filename
 * when the "s" key is pressed.
 */
export const takeScreenshot = () => {
  // Create a hidden canvas element to capture the screenshot
  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const context = canvas.getContext("2d");

  // Capture the screenshot
  context.drawImage(
    document.documentElement,
    0,
    0,
    canvas.width,
    canvas.height
  );
  // Create a download link for the screenshot
  const screenshotDataUrl = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  // Determine the screenshot filename with a counter
  let counter = 1;
  let filename;
  do {
    filename = `screenshot_${counter}.png`;
    counter++;
  } while (filename in localStorage);
  // Save the screenshot filename in localStorage
  localStorage.setItem(filename, screenshotDataUrl);
  // Set the download attribute and trigger the click event
  a.href = screenshotDataUrl;
  a.download = filename;
  a.click();
};
