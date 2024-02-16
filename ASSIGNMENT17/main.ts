// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// Print a message to each of the two people still on your list, letting them know they’re still invited.
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


// Original guest list
let guests: string[] = ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Marie Curie', 'Nikola Tesla', 'Stephen Hawking'];

// Print message about inviting only two people for dinner
console.log("Sorry, the new dinner table won't arrive in time, so I can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guests.length > 2) {
    let removedGuest: string = guests.pop()!;
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

// Print invitation messages to the two remaining guests
for (let person of guests) {
    console.log(`Dear ${person}, you're still invited to dinner.`);
}

// Remove the last two names from the list
guests.pop();
guests.pop();

// Print the empty list
console.log(guests);