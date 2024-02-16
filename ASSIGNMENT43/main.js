// 43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the function to add "Great" to each magician's name
function makeGreat(magicians) {
    return magicians.map(function (name) { return "Great ".concat(name); });
}
// Define a function to show magicians' names
function showMagicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Original array of magicians' names
var magiciansOriginal = ["Harry", "Hermione", "Ron"];
// Make a copy of the original array and add "Great" to each magician's name
var magiciansGreat = makeGreat(__spreadArray([], magiciansOriginal, true));
// Show the original array of names
console.log("Original Magicians:");
showMagicians(magiciansOriginal);
// Show the array with "Great" added to each magician's name
console.log("\nMagicians with 'Great':");
showMagicians(magiciansGreat);
