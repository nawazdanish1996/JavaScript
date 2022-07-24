let marks = [55, 72, 55, 93, 66];
const fruits = ['Apple', 'Mango', 'Pineapple', 'Banana'];
const mixed = ['str', 53, [3, 5]];
const arr = new Array(23, 123, 21, 'Orange');

// console.log(marks);
// console.log(fruits);
// console.log(mixed);
// console.log(arr);

// console.log(marks[2]); // output will be index 2
// console.log(arr.length); // Length of Array
// console.log(Array.isArray(arr)); // is Array or not


arr[0] = "Mister"; // Number of index 0 will be replace
// console.log(arr);


let value = marks.indexOf(72);
// console.log(value);

// Modifying Array
// console.log(marks);
// marks.push(3556); // To add in last Index
// marks.unshift(33); // To add in first Index
// marks.pop(); // To remove last index
// marks.shift(); // to remove first index
// marks.splice(2, 3); // output will be 2 - 3 index
// marks.reverse(); // reverse an Array
let marks2 = [1, 2, 3, 4, 5];
marks = marks.concat(marks2); // add two Array in an Array
console.log(marks);