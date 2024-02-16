var guestArr = ["ABDULLAH", "UZAIR", "AMEEN", "ZIA"];
var canNotAttend = "UZAIR";
var newguest = "KASHIF";
guestArr[guestArr.indexOf(canNotAttend)] = newguest;
console.log(guestArr);
// part2
var guestbeg = "AIMA";
guestArr.unshift(guestbeg);
console.log(guestArr);
//part3
var middleguest = "FATIMA";
var middleindex = guestArr.length / 3;
guestArr.splice(middleindex, 0, middleguest);
console.log(guestArr);
// part 4 append
guestArr.push("Zeeshan");
console.log(guestArr);
//part 5 
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, " , you are invited in the more people list on dinner"));
});
