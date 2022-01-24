const fizzBuzz = require('./fizzbuzz')
describe("fizzBuzz", () => {
  it("returns FizzBuzz if number is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("Fizzbuzz result for 15 is FizzBuzz");
  });
  it("returns Fizz if number is divisible only by 3", () => {
    expect(fizzBuzz(9)).toBe("Fizzbuzz result for 9 is Fizz");
  });
  it("returns Buzz if number is divisible only by 5", () => {
    expect(fizzBuzz(10)).toBe("Fizzbuzz result for 10 is Buzz");
  });
  it("returns number if number is not divisible by 3 or 5", () => {
    expect(fizzBuzz(4)).toBe("Fizzbuzz result for 4 is 4");
  });
});
