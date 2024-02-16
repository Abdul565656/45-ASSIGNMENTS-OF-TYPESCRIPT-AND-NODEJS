//task 15

let guestArr:string[] = ["MEHAK","ALI","ABDULLAH","HAMZA"];

let canNotAttend:string = "ABDULLAH";

// console.log(canNotAttend+" "+ "can not attend the dinner");

let newguest:string = "HASSAN";

guestArr[guestArr.indexOf(canNotAttend)] = newguest;

// console.log(guestArr);

guestArr.map((items) => 
  console.log(`Dear ${items} , you are invited to a dinner`)
);