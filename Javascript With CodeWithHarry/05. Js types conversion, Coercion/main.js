/*
Type Conversion and type coercion
*/

// converting number into string
let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));


// converting boolean into string
let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

// converting date into string
let date = String(new Date());
console.log(date, (typeof date));
// document.write(date);

// converting Array into string
let arr = String([1, 2, 3, 4, 5]);
console.log(arr.length, (typeof arr));

// let i = new Date();
// let i = 5;
let i = true;
console.log(i.toString());

// converting string into number
let stri = Number("3434");
stri = Number("3434d");
stri = Number(false);
stri = Number([1, 2, 3, 4, 5, 6]);
console.log(stri, (typeof stri));


// let number = parseInt('34.25');
let number = parseFloat('34.25');
// let number = Number('34.25');
// console.log(number, (typeof number));
console.log(number.toFixed(2), (typeof number));



// Type Coercion

let mystr = Number("698");
// let mystr = "698";
let mynum = 34;

console.log(mystr + mynum);