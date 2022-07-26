/*
createElement   = will create the new element
createTextNode  = will create text
appendChild     = to marge text in element
replaceWith     = to replace (like m to s)
removeChild     = will remove
*/


// To create element
let element = document.createElement('li');
// created text
let text = document.createTextNode('I am Nawaz Danish');
// text added in element
element.appendChild(text);

// Add a class name to the li element.
element.className = "childul";

// Add a id name to the li element.
element.id = 'nawaz';

// Add text in the li element
// element.innerText = "This li created using JavaScript";

// set attribute in li element
element.setAttribute('title', 'mytitle');

// selected ul
let ul = document.querySelector('ul');
// appendChild will add under li element
ul.appendChild(element);
console.log(ul);
console.log(element);

// created an element and given id and class
let elem2 = document.createElement('h1');
elem2.id = 'elem2';
elem2.className = 'elemaa';
// created a text and append with h1
let ttext = document.createTextNode('Nawaz Danish');
elem2.appendChild(ttext);
console.log(elem2);

// replaceWith to replace the text
element.replaceWith(elem2);
let myul = document.getElementById('myul');
// removeChild will remove
myul.removeChild(document.getElementById('fli'));