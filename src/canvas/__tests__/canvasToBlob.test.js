import { canvasToBlob } from "../canvasToBlob";

describe("canvasToBlob", () => {
  it("converts canvas content to a Blob", async () => {
    const canvas = document.createElement("canvas");
    const blob = await canvasToBlob(canvas);
    expect(blob).toBeInstanceOf(Blob);
  });
});
