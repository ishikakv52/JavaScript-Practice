// node basics3/functions.js

//TSRN
// function sum(num1,num2){
//     console.log(num1+num2)
// }
// sum(3,4)

//TSRS
// function sum(num1,num2){
    
//     return num1+num2
// }
// result=sum(3,4)
// console.log(result)



function username(name){
    if (name === undefined){
        console.log("Please Enter Username")
        return 
    }
    return `${name} just logged in`
}
console.log(username("Ishika Rathi"))