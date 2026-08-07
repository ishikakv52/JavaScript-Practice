// node basics2/arrays2.js
const fruits = ["Apple", "Mango"];

const colors = ["Red", "Blue"];

// fruits.push(colors);
both=fruits.concat(colors)
console.log(both)
const all_new=[...fruits,...colors]
console.log(all_new)


const arr1=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const arr2=arr1.flat(Infinity)
console.log(arr2)

console.log(Array.isArray("Ishika"))
console.log(Array.from("Ishika"))


let marks1=99
let marks2=98
let marks3=99.9
console.log(Array.of(marks1,marks2,marks3))