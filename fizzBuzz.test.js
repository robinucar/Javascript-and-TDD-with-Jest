describe("fizzBuzz", () => {
  it("returns FizzBuzz if number is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("returns Fizz if number is divisible only by 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });
  it("returns Buzz if number is divisible only by 5", () => {
    expect(fizzBuzz(10)).toBe("FizzBuzz");
  });
  it("returns number if number is not divisible by 3 or 5", () => {
    expect(fizzBuzz(4)).toBe(4);
  });
});
