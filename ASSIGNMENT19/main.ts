// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// Original guest list
let guests: string[] = ['Albert Einstein', 'Marie Curie', 'Nikola Tesla'];

// Print message indicating the number of people invited to dinner
console.log(`Number of people invited to dinner: ${guests.length}`);

// Add one new guest to the beginning of the list
guests.unshift('Isaac Newton');

// Add one new guest to the middle of the list
let middleIndex: number = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, 'Galileo Galilei');

// Use push() to add one new guest to the end of the list
guests.push('Stephen Hawking');

// Print message indicating the updated number of people invited to dinner
console.log(`Number of people invited to dinner: ${guests.length}`);