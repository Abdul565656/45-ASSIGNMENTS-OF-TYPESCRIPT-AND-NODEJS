// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// Version 1: Alien color is green (correct)
var alienColor1 = "green";
if (alienColor1 === "green") {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    // Intentional error: This block should not be executed for a green alien
    console.log("Error: This block should not be executed for a green alien.");
}
// Version 2: Alien color is not green (incorrect)
var alienColor2 = "red"; // For example
if (alienColor2 === "green") {
    // Intentional error: This block should not be executed for a non-green alien
    console.log("Error: This block should not be executed for a non-green alien.");
}
else {
    console.log("Player just earned 10 points.");
}
