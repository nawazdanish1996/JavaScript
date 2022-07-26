let a = document;
a = document.all;
// a = document.body;
// a = document.forms;
// Array.from(a).forEach(function(element){
//     console.log(element);
// })
a = document.links[0].href; // to find links
a = document.scripts;
a = document.images[0];

// document.write(a);
console.log(a);
// console.log(typeof a);