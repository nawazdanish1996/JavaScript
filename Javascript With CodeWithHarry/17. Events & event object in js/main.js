/*
addEventListener() method attaches an event handler to a document.
*/
// Syntax
let a = document.getElementById('heading');
a.addEventListener('click', function(e){
    // console.log("You have clicked on heading");
    console.log(e);
});