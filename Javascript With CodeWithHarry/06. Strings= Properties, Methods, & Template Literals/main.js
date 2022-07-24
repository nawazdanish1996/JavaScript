const name = "Nawaz";
const greeting = "Good Morning";
// console.log(greeting + " " + name);


let html;
html = "<h1>This is Heading</h1>"+
"<p>This is my Paragraph</p>";
// html.concat('this');
console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);

// console.log(html[5]);

// console.log(html.indexOf('<'));   // first index
// console.log(html.lastIndexOf('<')); // last index

console.log(html.charAt(1));
console.log(html.startsWith('<h1>'));

console.log(html.substring(5,10)); // start with index 5 and end with index 10

console.log(html.slice(-4)); // 0 to index 4 will show
console.log(html.split(' ')); // will give an Array
console.log(html.replace('This', 'that')); // 'this' will be replace to 'that'


let fruit1 = 'Mango\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
<h1>This is Heading</h1>
<p>You like ${fruit1} and ${fruit2} </p>`;

document.body.innerHTML = myHtml;