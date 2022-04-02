//  5. Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

var x = 35;

if (x < 10) {
  console.log(9);
} else if (x > 10 && x < 20) {
  console.log(19);
} else if (x > 20 && x < 30) {
  console.log(29);
} else {
  console.log(-1);
}