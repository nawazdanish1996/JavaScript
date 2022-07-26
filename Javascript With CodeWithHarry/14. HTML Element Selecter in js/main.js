/* Element Selectors:
1. Single Element Selector
2. Multi Element Selector
*/


// 1. Single Element Selector
let element = document.getElementById('myfirst');
// element = element.className;  // to know class name
// element = element.childNodes; // child class / id
// element = element.parentNode; // parent class / id
element.style.color = "red";
element.innerText = "Nawaz Danish"
element.innerHTML = "<b>N Raja Rana</b>"
// console.log(element.innerHTML);  


let sel = document.querySelector('#second');
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel.style.color = "green";
// console.log(sel);



// 2. Multi Element Selector
let elems = document.getElementsByClassName('container');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName("div");
console.log(elems);

Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = "blue";
})

// console.log(elems[0].getElementsByClassName('child'));