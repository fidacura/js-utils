import { generateRandomColor } from "../generateRandomColor";

// Mock implementations of randomInt and randomFloat
const randomInt = jest.fn(() => 0); // Mock return value
const randomFloat = jest.fn(() => 0.5); // Mock return value

describe("generateRandomColor", () => {
  it("generates a valid hex color by default", () => {
    const color = generateRandomColor();
    expect(color).toMatch(/^#[0-9a-f]{6}$/i);
  });

  // Add more tests for other formats like rgb, rgba, hsl, hsla
});
