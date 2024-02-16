

let guestArr:string[] = ["ABDULLAH","UZAIR","AMEEN","ZIA"];
let canNotAttend:string = "UZAIR";
let newguest:string = "KASHIF";

guestArr[guestArr.indexOf(canNotAttend)] = newguest;
console.log(guestArr);

// part2
let guestbeg:string = "AIMA";
guestArr.unshift(guestbeg);
console.log(guestArr);

//part3
let middleguest:string = "FATIMA";
let middleindex = guestArr.length/3;
guestArr.splice(middleindex,0,middleguest);
console.log(guestArr);

// part 4 append
guestArr.push("Zeeshan");
console.log(guestArr);

//part 5 
guestArr.map ((items) => 
  console.log(`Dear ${items} , you are invited in the more people list on dinner`)
);
