/*
if
if-else
if-else if - else
*/

// let age = 19;
// if(age > 18);
// console.log("You are eligible");

// let age = 19;
// if(age > 18){
//     console.log(`You are eligible`);
// }else{
//     console.log("You are Minor");
// }

// let age = 55;
// let ticketPrice = 700;
// let seniorDiscount = 200;
// let childDiscount = 400;

// if(age >= 60){
//     ticketPrice -= seniorDiscount;
//     console.log(ticketPrice);
// }else if(age <= 10){
//     ticketPrice -= childDiscount;
//     console.log(ticketPrice);
// }else{
//     console.log(ticketPrice);
// }

/*
Switch case
*/

let age = 15;
switch(true){
    case age>=60:
        console.log("Senior Citizen");
    break;

    case age<=18:
        console.log("Minor");
    break;

    default:
        console.log("bad");
}