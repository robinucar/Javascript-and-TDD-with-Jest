const generateMessages = (namesAndDiscount) => {
  return namesAndDiscount.map((elements) => {
      const name = elements.name
      const discount = elements.discount
    return `Hi ${name}! ${discount} off our best candies for you today!`;
  });
};

console.log(generateMessages([{name: 'Robin', discount: '%50'},{name: 'Kathy', discount: '%40'}]));
