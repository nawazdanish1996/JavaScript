const myTimeout = setTimeout(myGreeting, 0);

console.log("1");
function myGreeting(){
    console.log("2");
}
console.log(3);

/*
Output: 1, 3, 2

Ans: The code put to the side. After all the code executed then the side code executed.
*/