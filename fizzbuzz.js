const fizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return "Fizzbuzz result for " + number + " is FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizzbuzz result for " + number + " is Fizz";
  } else if (number % 5 === 0) {
    return "Fizzbuzz result for " + number + " is Buzz";
  } else {
    return "Fizzbuzz result for " + number + " is " + number;
  }
};

module.exports = fizzBuzz;
