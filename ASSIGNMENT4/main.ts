

let personName:string = "ABDULLAH KASHIF";

//in lowercase

console.log("lowercase:" , personName.toLowerCase());


//in uppercase

console.log("uppercase:" , personName.toUpperCase());   

//in titlecase

console.log("titlecase:", personName.replace(/\b\w/g ,c=> c.toUpperCase()));