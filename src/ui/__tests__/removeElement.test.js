const { removeElement } = require("../removeElement");

describe("removeElement", () => {
  test("removes an element from the DOM", () => {
    document.body.innerHTML = '<div id="element"></div>';
    const element = document.getElementById("element");
    removeElement(element);
    expect(document.getElementById("element")).toBeNull();
  });
});
