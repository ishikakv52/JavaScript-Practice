// node basics2/arrays.js
const myArr=[0,1,2,3,4]
// console.log(myArr[2])

const Arr=[0,1,"Jaat",2,3,4,9.8,"Rathi"]
console.log(Arr)



// Array methods
myArr.push(5) //add element
console.log(myArr)
myArr.pop()   // remove last element
console.log(myArr)
myArr.unshift(100) //add at index 0
console.log(myArr)
myArr.shift() //remove item from index 0
console.log(Arr.includes("Jaat"))
console.log(Arr.indexOf("Rathi"))
console.log(myArr)

const newArr=myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

//slice,splice
console.log("A",myArr)
const new1=myArr.slice(1,3)
console.log(new1);

console.log("B",myArr)
const new2=myArr.splice(1,3)
console.log(new2);

// splice() original array ko modify karta hai, jabki slice() original array ko bina badle naya array return karta hai.