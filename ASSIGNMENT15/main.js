//task 15
var guestArr = ["MEHAK", "ALI", "ABDULLAH", "HAMZA"];
var canNotAttend = "ABDULLAH";
// console.log(canNotAttend+" "+ "can not attend the dinner");
var newguest = "HASSAN";
guestArr[guestArr.indexOf(canNotAttend)] = newguest;
// console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, " , you are invited to a dinner"));
});
