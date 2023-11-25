const { copyToClipboard } = require("../copyToClipboard");

// Mock document.execCommand to return true
document.execCommand = jest.fn().mockImplementation(() => true);

describe("copyToClipboard", () => {
  test("copies text to the clipboard", () => {
    const text = "Test string";
    const result = copyToClipboard(text);
    expect(document.execCommand).toHaveBeenCalledWith("copy");
    expect(result).toBeTruthy();
  });
});
