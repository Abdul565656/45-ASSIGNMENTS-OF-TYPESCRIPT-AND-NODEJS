// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings
var string1 = "hello";
var string2 = "world";
var string3 = "hello";
console.log(string1 === string2); // false
console.log(string1 === string3); // true
console.log(string1 !== string2); // true
console.log(string1 !== string3); // false
// Tests using the lower case function
var upperCaseString = "HELLO";
var lowerCaseString = "hello";
console.log(upperCaseString.toLowerCase() === lowerCaseString); // true
// Numerical tests
var num1 = 10;
var num2 = 5;
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // true
console.log(num1 < num2); // false
console.log(num1 >= num2); // true
console.log(num1 <= num2); // false
// Tests using "and" and "or" operators
var x = 5;
var y = 10;
console.log(x > 3 && y < 15); // true
console.log(x > 3 && y > 15); // false
console.log(x > 3 || y > 15); // true
console.log(x < 3 || y < 15); // true
// Test whether an item is in an array
var array = [1, 2, 3, 4, 5];
console.log(3 in array); // true
console.log(6 in array); // false
// Test whether an item is not in an array
console.log(!(3 in array)); // false
console.log(!(6 in array)); // true
