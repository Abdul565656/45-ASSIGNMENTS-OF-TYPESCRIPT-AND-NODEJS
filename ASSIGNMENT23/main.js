// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var number = 10;
// Test 1: Is number equal to 10?
console.log("Is number == 10? I predict True.");
console.log(number == 10); // True
// Test 2: Is number greater than 5?
console.log("Is number > 5? I predict True.");
console.log(number > 5); // True
// Test 3: Is number less than or equal to 10?
console.log("Is number <= 10? I predict True.");
console.log(number <= 10); // True
// Test 4: Is number not equal to 5?
console.log("Is number != 5? I predict True.");
console.log(number != 5); // True
// Test 5: Is number between 1 and 20?
console.log("Is number between 1 and 20? I predict True.");
console.log(number > 1 && number < 20); // True
// Test 6: Is number equal to 15?
console.log("Is number == 15? I predict False.");
console.log(number == 15); // False
// Test 7: Is number less than 0?
console.log("Is number < 0? I predict False.");
console.log(number < 0); // False
// Test 8: Is number greater than 100?
console.log("Is number > 100? I predict False.");
console.log(number > 100); // False
// Test 9: Is number not equal to 10?
console.log("Is number != 10? I predict False.");
console.log(number != 10); // False
// Test 10: Is number between 11 and 20?
console.log("Is number between 11 and 20? I predict False.");
console.log(number > 11 && number < 20); // False
