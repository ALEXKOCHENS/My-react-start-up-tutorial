// Using the regular function.

// function getRectangleArea(width, height) {
//   return width * height;
// }
// console.log(getRectangleArea(3, 6));

// using the arrow function
const getRectangleArea = (width, height) => {
  return width * height;
};

console.log(getRectangleArea(50, 40));

const person = {
  name: "alex kochens",
  school: "panoah p/s",
  great: () => {
    console.log(`Hello, good morning? `);
  },
};

console.log(person.great());
console.log(person.name, person.school);

const buyMilk = (quantity, price) =>
  console.log(
    `You have bought ${quantity} cups of milk at ${price}, thank you!`
  );

console.log(buyMilk(4, 4000));

// using a simple map array method. this simple function doubles the numbers i the array.

const numbers = [4, 6, 8, 9, 10];

const doubled = numbers.map((number) => number * 2);
console.log(doubled);

//ternary operator

const number = 10;
let message = "";

if (number % 2 === 0) {
  message = "Even number!";
} else {
  message = "Odd number!";
}

console.log(message);

// using the ternary operator.

const num = 1;
let messages = num % 2 === 0 ? "Even number" : "odd number";

console.log(messages);

// Array methods
