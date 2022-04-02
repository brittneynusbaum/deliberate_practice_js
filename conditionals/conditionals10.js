//  10. Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise (only one print statement should occur).

var x = 10;

if (x > 80) {
  console.log(5);
} else if (x > 60 && x < 80) {
  console.log(4);
} else if (x > 40 && x < 60) {
  console.log(3); 
} else if (x > 20 && x < 40) {
  console.log(2);
} else {
  console.log(1);
}