const Candy = require('./candy')
describe("candy class", () => {
  const candy = new Candy("Mars", 4.99);

  it("returns the name of candy", () => {
    expect(candy.getName()).toEqual("Mars");
  });

  it("returns the price of candy", () => {
    expect(candy.getPrice()).toEqual(4.99);
  });
});

