//node basics2/objects.js


const mySym=Symbol("key1")
//object literals
const JsUser ={
    name : "Rathi",
    age :18,
    [mySym] :"mykey1"
,    location : "India"
}
console.log(JsUser.name)
console.log(JsUser["name"])
console.log(JsUser[mySym])
JsUser.name="Ishika"
// Object.freeze(JsUser)  // Object.freeze() object ko immutable bana deta hai, yani usme add, update ya delete nahi kar sakte.
JsUser.name="Jaat"
console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello JS user")
}
JsUser.greeting=function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting())