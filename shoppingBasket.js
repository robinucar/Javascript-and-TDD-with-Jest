const Candy = require("./candy");

class ShoppingBasket {
  constructor(...candies) {
    this.candies = candies;
    this.price = 0;
  }

  addItem(item = new Candy()) {
    return this.candies.push(item);
  }

  getTotalPrice() {
    this.candies.map((candy) => {
      (this.price += candy.price);
    });
    return this.price;
  }
}

module.exports = ShoppingBasket

const basket = new ShoppingBasket();
basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Mars', 4.99))
console.log(basket)
console.log(basket.getTotalPrice());
