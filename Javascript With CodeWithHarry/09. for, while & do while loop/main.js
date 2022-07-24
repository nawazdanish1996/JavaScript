/* Loops
1. for loop
2. while loop
3. do while loop
*/

// 1+1+1=3
// let a = 1;
// a += 1; //+1
// a++; //+1
// console.log(a); // output: 3

// for loop: Print 1 to 100
for (let i = 1; i <= 100; i++) {
  // console.log(i);
}

// while loop: Print 1 to 100
let j = 1;
while (j <= 100) {
  // console.log(j);
  j += 1;
}

// do while loop: print 1 to 100
let k = 0;
do {
  if (k === 5) {
    // k += 1;
    break;
  }
  // console.log(k + 1);
  k += 1;
} while (k < 100);
// console.log("Done");


let arr = [1, 2, 5, 6, 9, 8];

// for(let i = 0; i < arr.length; i++){
//   const element = arr[i];
//   console.log(element);
// }

// arr.forEach(function(element){
//   console.log(element);
// })


let obj = {
  name: "Rohan Das",
  age: 55,
  type: "Dangerous",
  os: "Windows"
}
// console.log(obj.name);

for(let key in obj){
  console.log(`${key} of Object is ${obj[key]}`);
}

console.log("Done");