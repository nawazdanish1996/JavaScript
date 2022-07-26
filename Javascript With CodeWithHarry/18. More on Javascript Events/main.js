/*
The preventDefault() method cancels the event if it is cancelable.
*/

let btn = document.getElementById('btn');
btn.addEventListener('click', fun1);

function fun1(e){
    console.log("thanks", e);
    e.preventDefault();
}