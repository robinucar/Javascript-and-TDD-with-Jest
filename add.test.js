const { expect } = require("@jest/globals");
const { it } = require("jest-circus");

describe("add", () => {
  it("adds 2 and 2", () => {
    expect(add(2, 2)).toBe(4);
  });
});
