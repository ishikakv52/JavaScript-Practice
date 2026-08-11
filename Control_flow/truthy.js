// node Control_flow/truthy.js

const UserEmail="irathi@gmail.com"
if(UserEmail){                         //without comparison it checks whether the variable having any data or not if there is then it will be true otherwise false
    console.log("Got Email");
}
else{
    console.log("No Email Detected");
}


//falsy value
// false,0,-0,BigInt 0n,NaN,"",null,undefined
//truthy values
//"false","0"," ",[],{},function(){}

let val1;
val1=5??10
console.log(val1)