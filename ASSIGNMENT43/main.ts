// 43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// Define the function to add "Great" to each magician's name
function makeGreat(magicians: string[]): string[] {
    return magicians.map(name => `Great ${name}`);
}

// Define a function to show magicians' names
function showMagicians(magicians: string[]): void {
    magicians.forEach(name => console.log(name));
}

// Original array of magicians' names
const magiciansOriginal: string[] = ["Harry", "Hermione", "Ron"];

// Make a copy of the original array and add "Great" to each magician's name
const magiciansGreat: string[] = makeGreat([...magiciansOriginal]);

// Show the original array of names
console.log("Original Magicians:");
showMagicians(magiciansOriginal);

// Show the array with "Great" added to each magician's name
console.log("\nMagicians with 'Great':");
showMagicians(magiciansGreat);