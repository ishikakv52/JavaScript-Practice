// node adv_one/promises.js
const promiseOne=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async task 1 is done");
        resolve()
    },1000)
})
promiseOne.then(()=>{
    console.log("promise consumed");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    },1000)
}).then(()=>{
    console.log("Async 2 resolved");
    
})

const promiseThree=new Promise(function(resolve,reject){
setTimeout(function(){
    resolve({username:"Jaat",email:"jaat@example.com"})
},1000)
})
promiseThree.then((user)=>{
    console.log(user);
    
})
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=true
        if(!error){
        resolve({username:"Ishika",password:"123"})}
        else{
            reject('Error:Something wents wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
 })
 .then((username)=>{
    console.log(username);
 })
 .catch((error)=>{
    console.log(error);
    
 })
 .finally(()=>console.log("promise is either resolved or rejected")
)