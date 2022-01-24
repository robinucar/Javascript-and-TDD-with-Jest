// const sayHello = (name) => {
//   return `Hello ${name}`;
// };
// console.log(sayHello("Robin"));
//console.log("Hello There");
//const age = 25;
//console.log(`I am ${age} old`);
// const a = 4
// const b = 6
// console.log(a + b)
// console.log(a * b)

// const greeting = "Hello ";
// const name = "Makers";

// console.log(greeting + name);

// const sayHello = (name) => 'Hello ' + name;
// console.log(sayHello('Robin'))

// const sayHello1 = (name) => `Hello ${name}`;
// console.log(sayHello1('Robin'))

//  const add = (a, b) => {
//      return a + b;
//  }

//  const multiply = (a, b) => {
//      return a * b;
//  }

// console.log(add(5, 4)) // 9
// console.log(multiply(5, 4)) // 20

// console.log(multiply(2, add(4, 4)))

// const getNumberSign = number => {
//     if (number > 0) {
//         return 'possitive'
//     } else if (number < 0) {
//         return 'negative'
//     } else {
//         return 'zero'
//     }
// }

// console.log(getNumberSign(5))
// console.log(getNumberSign(-5))
// console.log(getNumberSign(0))

// const isValidLength = (phoneNumber) => {
//   const validLength = 10;
//   if (phoneNumber.length === validLength) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isValidLength("00")); // false
// console.log(isValidLength("0011223344")); // true

// const fizzBuzz = (number) => {
//   if (number % 3 === 0 && number % 5 === 0) {
//     return "Fizzbuzz result for " + number + " is FizzBuzz";
//   } else if (number % 3 === 0) {
//     return "Fizzbuzz result for " + number + " is Fizz";
//   } else if (number % 5 === 0) {
//     return "Fizzbuzz result for " + number + " is Buzz";
//   } else {
//     return "Fizzbuzz result for " + number + " is " + number;
//   }
// };

// for(let i = 0; i <= 50; i++) {
//     console.log(`Fizzbuzz result for ${i} is ${fizzBuzz(i)}`);
// }

// fizzBuzz()

// Passing functions to other functions
// const notifyByEmail = (email) => {
//   return "Email sent to: " + "<" + email.toUpperCase() + ">";
// };

// const notifyByText = (phone) => {
//   return "text sent to: " + "<" + phone + ">";
// };

// const notify = (type, method) => {
//   return method(type);
// };

// console.log(notify("07481801996", notifyByText));
// console.log(notify("aaa@aaa.com", notifyByEmail));
