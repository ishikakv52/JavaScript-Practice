// node basics3/this_and_arrow.js
const user={
    username1:"Ishika",
    id:109,
    welcomeMessage:function(){
        console.log(`${this.username1},Welcome to this website`);   // "this" is current context 
    }
}
user.welcomeMessage()


//arrow function
const addTwo=(n1,n2)=>{
    return n1+n2
}
sum=addTwo(3,5)
console.log("The sum is : ",sum)
//implicit arrow function
const addTwo1=(n1,n2)=>n1+n2
console.log(addTwo1(3,6))
