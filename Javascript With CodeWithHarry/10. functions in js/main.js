function greet(name, thank){
    console.log(`Happy Birthday ${name} 
    How I wish I could fly to you right now and be with you on this special day of yours but remember, my good wishes are always there with you.
    Happy Birthday! ${thank} :)`);

}

let name = "SkillF";
let name2 = "Nawaz";
// greet(name, 'Thanks a lot');


const obj = {
    name: "SkillF",
    game: function(){
        return "GTA"
    }
}
// console.log(obj.game());


arr = ['fruit', 'vegetable', 'furniture'];
arr.forEach(function(element, index, array) {
    // console.log(element, index);
});


let i = 234;
// console.log(i);
function ui(name){
    let i = 9;
    // i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}
console.log(ui("Nawaz Danish"), i);

/* Notes
let / const has block level scope!
var has function level scope!
*/
