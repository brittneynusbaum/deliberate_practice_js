//  1. Start with an array of numbers and create a new array with only the numbers less than 20.
//     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].
// var numbers = [2, 32, 80, 18, 12, 3];
// var greaterThanTwenty = []
// numbers.forEach(function (number) {
//   if (number < 20) {
//     greaterThanTwenty.push(number);
//   }
// });
// console.log(greaterThanTwenty);

//  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
//     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

// var strings = ["winner", "winner", "chicken", "dinner"];
// var startsWithW = [];
// strings.forEach(function (string) {
//   if (string[0] === 'w') {
//     startsWithW.push(string);
//   }
// });
// console.log(startsWithW);

//  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

// var items = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var priceGreaterFive = [];

// items.forEach(function (item) {
//   if (item.price > 5) {
//     priceGreaterFive.push(item);
//   }
// });
// console.log(priceGreaterFive);

//  4. Start with an array of numbers and create a new array with only the even numbers.
//     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

// var numbers = [2, 4, 5, 1, 8, 9, 7];
// var evenNumbers = [];

// numbers.forEach(function (number) {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });
// console.log(evenNumbers);

//  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
//     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

// var strings = ["a", "man", "a", "plan", "a", "canal", "panama"];
// var shorterFour = [];
// strings.forEach(function (string) {
//   if (string.length < 4) {
//     shorterFour.push(string);
//   }
// });
// console.log(shorterFour);

//  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

// var items = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var nameShorterSix = [];

// items.forEach(function (item) {
//   if (item.name.length < 6) {
//     nameShorterSix.push(item);
//   }
// });
// console.log(nameShorterSix);

//  7. Start with an array of numbers and create a new array with only the numbers less than 10.
//     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

var numbers = [8, 23, 0, 44, 1980, 3];
var lessThanTen = [];
numbers.forEach(function (number) {
  if (number < 10) {
    lessThanTen.push(number);
  }
});
console.log(lessThanTen);

//  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
//     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

//  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

// 10. Start with an array of numbers and create a new array with only the odd numbers.
//     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].
