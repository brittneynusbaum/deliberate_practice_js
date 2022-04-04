//  1. Start with an array of numbers and create a new array with each number times 3.
//     For example, [1, 2, 3] becomes [3, 6, 9].
// var numbers = [1, 2, 3];
// var timesThree = [];
// numbers.forEach(function(number) {
//   timesThree.push(number * 3);
// });
// console.log(timesThree);

//  2. Start with an array of strings and create a new array with each string upcased.
//     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].
// var strings = ["hello", "goodbye"];
// var upcased = [];
// strings.forEach(function(string) {
//   upcased.push(string.toUpperCase());
// });
// console.log(upcased);

//  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
//     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].
// var person = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
// var personName = [];
// person.forEach(function(people) {
//   personName.push(people.name);
// });
// console.log(personName);

//  4. Start with an array of numbers and create a new array with each number plus 7.
//     For example, [1, 2, 3] becomes [8, 9, 10].
// var numbers = [1, 2, 3];
// var plusSeven = [];
// numbers.forEach(function(number) {
//   plusSeven.push(number + 7);
// });
// console.log(plusSeven);

//  5. Start with an array of strings and create a new array with each string's length.
//     For example, ["hello", "goodbye"] becomes [5, 7].
// var strings = ["hello", "goodbye"];
// var stringLength = [];
// strings.forEach(function(string) {
//   stringLength.push(string.length);
// });
// console.log(stringLength);

//  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
//     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].
// var person = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
// var personAge = [];
// person.forEach(function(people) {
//   personAge.push(people.age);
// });
// console.log(personAge);

//  7. Start with an array of numbers and create a new array with each number divided by 2.
//     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].
// var numbers = [1, 2, 3];
// var dividedByTwo = [];
// numbers.forEach(function(number) {
//   dividedByTwo.push(number / 2);
// });
// console.log(dividedByTwo);

//  8. Start with an array of strings and create a new array with each string's first letter only.
//     For example, ["hello", "goodbye"] becomes ["h", "g"].
var strings = ["hello", "goodbye"];
var firstLetter = [];
strings.forEach(function(string) {
  firstLetter.push(string[0]);
});
console.log(firstLetter);

// 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
//     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// 10. Start with an array of numbers and create a new array with each number converted into a string.
//     For example, [1, 2, 3] becomes ["1", "2", "3"].
