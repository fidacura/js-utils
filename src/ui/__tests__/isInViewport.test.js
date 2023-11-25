const { isInViewport } = require("../isInViewport");

describe("isInViewport", () => {
  test("checks if an element is in the viewport", () => {
    const element = document.createElement("div");
    element.getBoundingClientRect = jest.fn(() => ({
      top: 100,
      left: 100,
      bottom: 200,
      right: 200,
    }));
    window.innerHeight = 300;
    window.innerWidth = 300;
    expect(isInViewport(element)).toBeTruthy();
  });
});
