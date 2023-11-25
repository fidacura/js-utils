const { createElement } = require("../createElement");

describe("createElement", () => {
  document.body.innerHTML = '<div id="parent"></div>';
  const parent = document.getElementById("parent");

  test("creates and appends an element to the DOM", () => {
    const newElement = createElement("div", parent, { id: "child" });
    expect(newElement.tagName).toBe("DIV");
    expect(newElement.id).toBe("child");
    expect(parent.contains(newElement)).toBeTruthy();
  });
});
