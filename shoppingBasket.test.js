const ShoppingBasket = require("./shoppingBasket");
const Candy = require("./candy")
describe("shopping basket class", () => {
  const basket = new ShoppingBasket();
  it("returns price as 0 by default", () => {
    expect(basket.getTotalPrice()).toEqual(0);
  });

  it("returns the total price after adding items", () => {
    basket.addItem(new Candy('Mars', 4.99));
    basket.addItem(new Candy('Skittle', 3.99));
    basket.addItem(new Candy('Skittle', 3.99));
    expect(basket.getTotalPrice()).toEqual(12.97);
  });
});
